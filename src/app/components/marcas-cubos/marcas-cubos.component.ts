import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import Cubo from '../../models/cubo';

@Component({
  selector: 'app-marcas-cubos',
  templateUrl: './marcas-cubos.component.html',
  styleUrl: './marcas-cubos.component.css'
})
export class MarcasCubosComponent {

  constructor(private router: Router, private serviceCubos: ServiceCubos, private route: ActivatedRoute) { }

  public cubos!: Cubo[];
  public marca!: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      this.marca = nombre;
      this.serviceCubos.getCubosMarca(nombre).then(data => {
        this.cubos = data;
        console.log("data", data);
      });
    });
    
  }

}
