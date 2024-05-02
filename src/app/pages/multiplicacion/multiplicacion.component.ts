import { Component } from '@angular/core';
import { OperacionComponent } from '../../components/operacion/operacion.component';

@Component({
  selector: 'app-multiplicacion',
  standalone: true,
  imports: [OperacionComponent],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.scss'
})
export class MultiplicacionComponent {
  operacion: string = "*"
}
