import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UsuarioservService } from './Service/Usuarioserv.service';


@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
constructor(private dataService: UsuarioservService, private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
const routeurl: string = state.url;
return this.isLogin(routeurl);
}


isLogin(routeurl: string): any {
if (this.dataService.isLoggedIn()) {
return true;
}
this.dataService.redirectUrl = routeurl;
this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
}

//https://fahmidasclassroom.com/register-and-login-system-using-angular-8-php-and-mysql/
//https://www.youtube.com/watch?v=m5ZNGM7VKwg&t=236s

}

