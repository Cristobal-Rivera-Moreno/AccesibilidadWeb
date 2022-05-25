import { Component,EventEmitter,Output,OnInit} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild,Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  clase:string="white";
 active(){
   this.band=true;
 }
  constructor(public accesibilidad:AccesibilidadService) {
    
  }
  ngOnInit(): void {
   
  }
 blackWhite(pass:string){
  console.log("estoy en root "+pass);
 
 }
}
