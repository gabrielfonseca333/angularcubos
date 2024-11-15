import { Component, ElementRef, ViewChild } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private serviceCubos: ServiceCubos) { }

  @ViewChild('cajausuario') cajausuario!: ElementRef;
  @ViewChild('cajacontrasena') cajacontrasena!: ElementRef;

  public login() {

    let user = this.cajausuario.nativeElement.value;
    let contrasena = this.cajacontrasena.nativeElement.value;

    this.serviceCubos.login(user, contrasena).then(data => {
      console.log("data", data);
      this.router.navigate(['/perfil']);
    });
  }

}
