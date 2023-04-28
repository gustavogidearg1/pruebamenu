import { Component , Input, OnInit} from '@angular/core';
import { UsuarioservService } from '../Service/Usuarioserv.service';
import { Users } from '../users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() nombre: string = this.dataService.getToken();
  loginbtn:boolean;
  logoutbtn:boolean;

  //inicio prueba
  Usuarios = {

    id: null,
    email: null,
    password: null,
  };
  //fianl prueba

  constructor(private dataService: UsuarioservService)
  {
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


  ngOnInit() {
    this.dataService.getToken();

  }

}
