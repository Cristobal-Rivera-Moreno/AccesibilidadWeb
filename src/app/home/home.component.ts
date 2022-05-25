import { Component, OnInit } from '@angular/core';
import { AccesibilidadService } from '../shared/accesibilidad.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public accesibilidad:AccesibilidadService) { }

  ngOnInit(): void {
  }
  
}
