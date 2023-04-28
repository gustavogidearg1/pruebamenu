import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsuarioservService } from '../Service/Usuarioserv.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //inicio prueba
  Usuarios = {

    id: null,
    email: null,
    password: null,
  };
  //fianl prueba

  angForm: FormGroup;
  constructor( private fb: FormBuilder,private dataService: UsuarioservService,private router:Router ) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });
  }
  ngOnInit() {


  }



  postdata(angForm1)
{
this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }


}




/*https://youtu.be/m5ZNGM7VKwg?t=236

https://fahmidasclassroom.com/register-and-login-system-using-angular-8-php-and-mysql/
*/
