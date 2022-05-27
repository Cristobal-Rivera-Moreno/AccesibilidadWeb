import { Component,EventEmitter,Output,OnInit} from '@angular/core';


import { AccesibilidadService } from './shared/accesibilidad.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'accesibilidadWeb';
  band:Boolean=false;
  @Output() black_white=new EventEmitter<Boolean>();
 active(){
   this.band=true;
 }
  constructor(public accesibilidad:AccesibilidadService) {
    
  }
  ngOnInit(): void {
   
  }

}
