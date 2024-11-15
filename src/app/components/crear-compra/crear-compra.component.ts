import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ServiceCubos from '../../services/service.cubos';
import { Router } from '@angular/router';
import Cubo from '../../models/cubo';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrl: './crear-compra.component.css'
})
export class CrearCompraComponent implements OnInit {

  constructor(private router: Router, private serviceCubos: ServiceCubos) { }

  @ViewChild('cajacubo') cajacubo!: ElementRef;

  public cubos!: Cubo[];

  ngOnInit(): void {
    this.serviceCubos.getCubos().then(data => {
      this.cubos = data;
      console.log("cubos", data);
    });
  }

  crearCompra() {
    const idCubo = this.cajacubo.nativeElement.value;
    this.serviceCubos.createPedido(idCubo).then(data => {
      console.log("data", data);
      this.router.navigate(['/perfil']);
    });
  }

}
