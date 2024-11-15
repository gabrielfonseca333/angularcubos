import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';
import Cubo from '../../models/cubo';
import Comentario from '../../models/comentario';

@Component({
  selector: 'app-detalle-cubo',
  templateUrl: './detalle-cubo.component.html',
  styleUrl: './detalle-cubo.component.css'
})
export class DetalleCuboComponent implements OnInit {

  constructor(private _router: Router, private _activeRoute: ActivatedRoute, private _service: ServiceCubos) { }

  public cubo!: Cubo
  public comentarios!: Comentario[];

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      const id = params['id'];

      this._service.getCubo(id).then(data => {
        this.cubo = data;
        console.log("data", data);
      });

      this._service.getComentarios(id).then(data => {
        this.comentarios = data;
        console.log("comentarios", data);
      });


    });
    
  }




}
