import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/cubo';
import ServiceCubos from '../../services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _service: ServiceCubos) { }

  public cubos!: Cubo[];

  ngOnInit(): void {
    this._service.getCubos().then(data => {
      console.log("data", data);
      this.cubos = data;
    });
  }



}
