import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  pnum = 0;
  snum = 0;
  resultado: number | undefined; // Resultado de la operacion

  sumaNumeros(){
    this.resultado = this.pnum + this.snum;
  }
  restaNumeros(){
    this.resultado = this.pnum - this.snum;
  }
  multiplicacionNumeros(){
    this.resultado = this.pnum * this.snum;
  }
  divisionNumeros(){
    this.resultado = this.pnum / this.snum;
  }

  actualizarPNumero(event: Event){
    this.pnum = +(event.target as HTMLInputElement).value;
  }
  actualizarSNumero(event: Event){
    this.snum = +(event.target as HTMLInputElement).value;
  }

}
