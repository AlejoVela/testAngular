const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require("./db/db");
const User = require('./routes/user');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',User);

app.listen(process.env.PORT, 
  () => console.log(`El servidor esta escuchando correctamente en el puerto ${process.env.PORT}`)
);

dbConnection();