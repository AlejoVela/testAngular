import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userData: any;
  constructor(private _userService: UserService) {
    this.userData = {
      name: "",
      email: "",
      password: ""
    } 
  }

  ngOnInit(): void {
  }

  public registerUser(){    
    if(
      this.userData.name != "" &&
      this.userData.email != "" &&
      this.userData.password != ""
    ){
      this._userService.createUser(this.userData).subscribe(
        (res) => {
          console.log("usuario creado!");          
        },
        (err) => {
          console.log(err.error);          
        }
      );
    } else {
      console.log("error");      
    }
  }
}
