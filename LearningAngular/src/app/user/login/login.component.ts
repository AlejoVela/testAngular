import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  constructor(private _userService: UserService) {
    this.userData = {
      email: "",
      password: ""
    } 
  }

  ngOnInit(): void {
  }

  login(){
    if(
      this.userData.email != "" &&
      this.userData.password != ""
    ){
      this._userService.login(this.userData).subscribe(
        (res) => {
          localStorage.setItem('token', res.jwtToken);
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
