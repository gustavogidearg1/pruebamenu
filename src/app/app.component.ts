import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioservService } from './Service/Usuarioserv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from './users';
import { Router } from '@angular/router';
import { first } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@Input() nombre: string = this.dataService.getToken();

//Inicio Prueba de emmit
//nombre: string =this.dataService.getToken();

//Final Prueba de emmit



  title = 'menulateral';
  loginbtn:boolean;
  logoutbtn:boolean;
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: UsuarioservService,private router:Router) {
  dataService.getLoggedInName.subscribe(name => this.changeName(name));
  this.angForm = this.fb.group({
    email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    password: ['', Validators.required]
    });

  if(this.dataService.isLoggedIn())
  {

  //console.log("conectado");
  this.loginbtn=false;
  this.logoutbtn=true;

  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false;

  }

  }

  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;

  }
  logout()
  {
  this.dataService.deleteToken();
  window.location.href = window.location.href;
  }

  ngOnInit() {
    this.dataService.getToken( );
  }

  cambiarNombre(){
    this.nombre = this.dataService.getToken( );
  }

  postdata(angForm1)
{
this.dataService.userlogin(angForm1.value.email,angForm1.value.password)

.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
this.dataService.getToken( );
this.dataService.getToken( );
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }

  }

