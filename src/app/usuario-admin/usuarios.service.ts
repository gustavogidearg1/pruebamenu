import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //local
  //baseUrl:string = "http://localhost/planidear/menulateral/src/app/Conexion/";

  //base externa
  baseUrl:string = "https://planidear.com.ar/pruebamenu/Conexion/";

constructor(private httpClient: HttpClient) { }
public getAllUsua(): Observable<any>{
  return this.httpClient.get(this.baseUrl);
}

mostrarTodos(){

  return this.httpClient.get(`${this.baseUrl}mostrarUser.php`);

}

agregar(Usuarios: any){
  return this.httpClient.post(`${this.baseUrl}agregarUsuarios.php`, JSON.stringify(Usuarios));

}

  eliminar(id :number){
    return this.httpClient.get(`${this.baseUrl}eliminarUsuarios.php?id=${id}`);
  }

  seleccionar(id :number){
    return this.httpClient.get(`${this.baseUrl}seleccionarUsuarios.php?id=${id}`);
  }

  update(Usuarios: any){
    return this.httpClient.post(`${this.baseUrl}updateUsuarios.php`, JSON.stringify(Usuarios));
  }



}
