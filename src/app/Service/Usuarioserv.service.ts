import { EventEmitter, Injectable, Input, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

import { map } from 'rxjs/operators';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioservService {redirectUrl: string;
  //local
  //baseUrl:string = "http://localhost/planidear/menulateral/src/app/Conexion/";

  //base externa
  baseUrl:string = "https://planidear.com.ar/pruebamenu/Conexion/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  @Output() consultaUsuario: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username, password) {
  alert(username)

  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  .pipe(map(Users => {
  this.setToken(Users[0].name);
  this.getLoggedInName.emit(true);
  return Users;
  }));

}

public userregistration(name,email,pwd) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
  .pipe(map(Users => {
  return Users;
  }));
  }

  //token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }


  mostrarUser(){
    return this.httpClient.get(`${this.baseUrl}mostrarUser.php`);

  }

  }
