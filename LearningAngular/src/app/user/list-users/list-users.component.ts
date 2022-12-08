import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private _userService: UserService) { }
  users: any[] = [];

  ngOnInit(): void {
    this._userService.listUsers().subscribe(
      (res) => {
        console.log(res);     
        this.users = res;
      },
      (err) => {
        console.log(err);        
      }
    )
  }

}
