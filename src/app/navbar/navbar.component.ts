import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AccesibilidadService } from '../shared/accesibilidad.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() band=new EventEmitter<Boolean>();

  constructor(public accesibilidad:AccesibilidadService,private router:Router) { }

  ngOnInit(): void {
    
  }
  logOut():void{

    this.band.emit(false);
    this.router.navigate(['/']);
  }

}
