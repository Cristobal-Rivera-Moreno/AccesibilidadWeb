import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesibilidadService {
  font_size:number=20;
  font_h!:string;
  font_p!:string;
  comb:number=1;
  cont:Boolean=false;
  constructor() { }
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
  
  stop(event:any):void{
    event.stopPropagation();
  }
  escalaGris(){
   this.cont==false?this.cont=true:this.cont=false;
  }
}
