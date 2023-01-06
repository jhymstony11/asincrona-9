import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
   

   mostrar = true;
   ocultar = false;
  
   Generar(){
     if(this.mostrar){
       this.mostrar = false;
     }else{
       this.mostrar = true;
     }
   }

   Generar1(){
    if(this.ocultar){
      this.ocultar = false;
    }else{
      this.ocultar = true;
    }
  }
}

