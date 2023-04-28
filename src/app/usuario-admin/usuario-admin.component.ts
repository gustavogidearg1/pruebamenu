import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { UsuarioservService } from '../Service/Usuarioserv.service';


@Component({
  selector: 'app-usuario-aadmin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.scss']
})
export class UsuarioAdminComponent implements OnInit {
  @Input() nombre: string = this.dataService.getToken();
  loginbtn:boolean;
  logoutbtn:boolean;

  usuaForm: FormGroup;
  usuarios: any;
  logeadoform: any;
  logeadoAdminform: boolean;
  usuario: string;
  constructor(public fbu: FormBuilder, public UsuaSer: UsuariosService, private dataService: UsuarioservService) {

    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if(this.dataService.isLoggedIn())
    {
    console.log("conectado");
    this.loginbtn=false;
    this.logoutbtn=true
    }
    else{
    this.loginbtn=true;
    this.logoutbtn=false
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
    Usuarios = {
      id : null,
      name: null,
      email : null,
      password: null,
      rol: null,
  }




  ngOnInit() {

    this.usuaForm = this.fbu.group({
      id: [''],
     name: ['', Validators.minLength],
      email: ['', Validators.email],
      password: ['', Validators.minLength],
      rol: ['user'],

    });
this.MostrarTodos();
 /* this.UsuaSer.getAllUsua().subscribe(
      (resp) => {
        this.usuarios = resp;
      },
      (error) => {
        console.error(error);
      }
    );*/

  }

  MostrarTodos() {
    this.UsuaSer.mostrarTodos().subscribe((result:any) => this.usuarios = result);
  }

    Agregar(): void{
  this.UsuaSer.agregar(this.usuaForm.value).subscribe(resp=>{
this.usuaForm.reset();
this.MostrarTodos();

this.usuarios.push(resp);

    },
    error=>{ console.error(error) },
  )
}


eliminar(id){
  this.UsuaSer.eliminar(id).subscribe(datos =>{
    if(datos['resultado'] == 'OK') {
      alert(datos['mensaje']);
      this.MostrarTodos();
    }
  });  }

  Modificar(){
    console.log("se presiono modificar");
    this.UsuaSer.update(this.usuaForm.value).subscribe((datos:any) =>{
      if(datos['resultado'] == 'OKM') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }

    }); }

    Seleccionar(id:number) {
      this.UsuaSer.seleccionar(id).subscribe((result:any) => this.Usuarios = result[0]);
    }

    editar(usuarios){
      this.usuaForm.setValue({
        id: usuarios.id,
        name: usuarios.name,
        email: usuarios.email,
        password: usuarios.password,
        rol: usuarios.rol,
      })
    }


}
