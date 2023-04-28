import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PaginadosComponent } from './paginados/paginados.component';
import { PaginaunoComponent } from './paginauno/paginauno.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';


const routes: Routes = [
  // {path: '', redirectTo: 'Login', pathMatch: 'full'},


  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Usuario', component: UsuarioAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
