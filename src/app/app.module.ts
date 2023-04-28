import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaunoComponent } from './paginauno/paginauno.component';
import { PaginadosComponent } from './paginados/paginados.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaunoComponent,
    PaginadosComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    UsuarioAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,
ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
