import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild,Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form!:FormGroup;
  password_1:string="123user";
  password_2:string="abc_user";
  font_size:number=20;
  font_h!:string;
  font_p!:string;
  comb:number=1;
  cont:Boolean=false;
  cssUrl: string;
  @Output() band=new EventEmitter<Boolean>();
  @ViewChild("idComponente") componente!:  ElementRef;
  constructor(private router:Router,private renderer: Renderer2,public sanitizer: DomSanitizer){
    this.form=new FormGroup({
      user:new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required)
    });
  
      this.cssUrl = 'assets/mystyles.css';
    
  }
  login(){
    console.log("hi");
    if(this.form.value.user=="user1" || this.form.value.user=="user2"){
      if(this.form.value.user=="user1" && this.form.value.pass==this.password_1){
        console.log("user1");
        this.band.emit(true);
        this.router.navigate(['/home']);
      }else if(this.form.value.user=="user2" && this.form.value.pass==this.password_2){
        this.band.emit(true);
       }else{
        alert("Contraseña incorrecta...");
      }
    }else{
      alert("El usuario no esta registrado");
    }
  }
  ngOnInit(): void {
  }
  aumentarFont():void{
    this.font_size++;
   
  }
  disminuirFont():void{
    this.font_size--;
    
  }
  cambiarFont():void{
        if(this.comb==1){
          this.font_h="Rowdies,cursive";
          this.font_p="Prompt,sans-serif";
          this.comb++;
        }else if(this.comb==2){
          this.font_h="Lobster, cursive";
          this.font_p="Cinzel,serif";
          this.comb++;
        }else if(this.comb==3){
          this.font_h="Anton,sans-serif";
          this.font_p="Noto Serif, serif";
          this.comb=1;
        }
  }  
   getPass():string{
    return "hola";
  }
  stop(event:any):void{
    event.stopPropagation();
  }
  escalaGris(){
   this.cont==false?this.cont=true:this.cont=false;
  }
}
