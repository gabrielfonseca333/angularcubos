import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ServiceCubos from '../../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router, private _service: ServiceCubos) { }

  public marcas!: string[];

  ngOnInit(): void {

    this._service.getMarcas().then(data => {
      this.marcas = data;
      console.log("marcas", data);
    });

  }

}
