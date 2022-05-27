import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesibilidadService } from '../shared/accesibilidad.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form!:FormGroup;
  password_1:string="123user";
  password_2:string="abc_user";
  

  @Output() band=new EventEmitter<Boolean>();
  constructor(private router:Router,public accesibilidad:AccesibilidadService){
    this.form=new FormGroup({
      user:new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required)
    });
    this.accesibilidad.usuario=-1;
  }
  login(){
    console.log("hi");
    if(this.form.value.user=="user1" || this.form.value.user=="user2"){
      if(this.form.value.user=="user1" && this.form.value.pass==this.password_1){
        console.log("user1");
        this.band.emit(true);
        this.accesibilidad.usuario=0;
        this.accesibilidad.recuperarConf();
        this.accesibilidad.guardarConf();
        this.router.navigate(['/home']);
        
      }else if(this.form.value.user=="user2" && this.form.value.pass==this.password_2){
        this.band.emit(true);
        this.accesibilidad.usuario=1;
        this.accesibilidad.recuperarConf();
     
        this.accesibilidad.guardarConf();
        this.router.navigate(['/home']);
        
       }else{
        alert("Contraseña incorrecta...");
      }
    }else{
      alert("El usuario no esta registrado");
    }
  }
  ngOnInit(): void {
  }

}
