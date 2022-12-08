const User = require("../models/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send({error: "Incomplete data"});

  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send({error: "The user is already registered"});

  const hash = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    dbStatus: true,
  });

  const result = await user.save();
  if (!result) return res.status(400).send({error: "Failed to register user"});
  try {
    const jwtToken = user.generateJWT();
    return res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Token generation failed");
  }
};


const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Wrong email or password");

  if (!user.dbStatus) return res.status(400).send("Wrong email or password");

  const hash = await bcrypt.compare(req.body.password, user.password);
  if (!hash) return res.status(400).send("Wrong email or password");

  try {
    const jwtToken = user.generateJWT();
    return res.status(200).send({ jwtToken });
  } catch (e) {
    return res.status(400).send("Login error");
  }
};

const listUser = async (req, res) => {
  const users = await User.find({
    $and: [{ name: new RegExp(req.params["name"], "i") }, { dbStatus: "true" }],
  })
    .exec();
  if (!users || users.length === 0)
    return res.status(400).send("No search results");
  return res.status(200).send(users.map(user => {
    return {
      name:user.name,
      email: user.email,
      dbStatus: user.dbStatus,
      _id: user._id
    }
  }));
};

module.exports = { registerUser, login, listUser }