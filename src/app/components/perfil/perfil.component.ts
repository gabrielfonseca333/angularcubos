import { Component, OnInit } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Router } from '@angular/router';
import User from '../../models/user';
import Compra from '../../models/compra';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router, private serviceCubos: ServiceCubos) { }

  public perfil!: User;
  public compras!: Compra[];

  ngOnInit(): void {
    this.serviceCubos.getPerfilUsuario().then(data => {
      this.perfil = data;
      console.log("perfil", data);
    });
  }

  loadCompras() {
    this.serviceCubos.getCompras().then(data => {
      this.compras = data;
      console.log("compras", data);
    });
  }



}
