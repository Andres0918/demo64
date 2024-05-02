import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistorialService } from '../../service/historial.service';

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.scss'
})
export class OperacionComponent {
  messages: String [] = []
  resultado: number = 0;
  @Input() operacion: string=""; 
  numeros: string[] = ["0","1","2","3","4","5","6","7","8","9" ];  
  pantalla: string = "";
  valores: string[] = [];

constructor(private historialService: HistorialService){

}

  ngOnInit(){
    this.messages = this.historialService.get()
  }
  limpiar(){
    this.historialService.clear()
    this.ngOnInit()
  }


  writeNumber(numero: string){
    if ( numero == this.operacion && (this.pantalla.includes(this.operacion) || this.pantalla.length == 0)){
      return;
    }
    else{
      this.pantalla += numero; 
    }     
  }

  delete(event: any){
    if(this.pantalla.length > 0){
      this.pantalla = this.pantalla.substring(0, this.pantalla.length - 10);
      this.resultado = 0
    }
  }

  operar(event: any){
    this.valores[0] =this.pantalla.split(this.operacion)[0];
    this.valores[1] =this.pantalla.split(this.operacion)[1];
    switch(this.operacion){
      case "+":{
        this.resultado = parseInt(this.valores[0]) + parseInt(this.valores[1]);
        break;
      }
      case "-":{
        this.resultado = parseInt(this.valores[0]) - parseInt(this.valores[1]);
        break;
      }
      case "*":{
        this.resultado = parseInt(this.valores[0]) * parseInt(this.valores[1]);
        break;
      }
      case "/":{
        this.resultado = parseInt(this.valores[0]) / parseInt(this.valores[1]);
        break;
      }
    }
    this.historialService.add(this.valores[0] + this.operacion + this.valores[1]+ "=" + this.resultado.toString())
  }
}