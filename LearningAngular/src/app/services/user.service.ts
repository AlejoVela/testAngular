import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string;
  constructor(private _httpClient: HttpClient) { 
    this.endpoint = environment.backendUrl
  }

  public createUser(userData: any){
    return this._httpClient.post<any>(`${this.endpoint}user`, userData);
  }
  public login(userData: any){
    return this._httpClient.post<any>(`${this.endpoint}user/login`, userData);
  }
  public listUsers(){
    return this._httpClient.get<any>(`${this.endpoint}user`);
  }
  public getToken(){
    return localStorage.getItem('token')
  }
  public loggedIn(): boolean{
    let token = localStorage.getItem('token');
    return token != undefined && token != ""
      ? true
      : false;
  }
}
