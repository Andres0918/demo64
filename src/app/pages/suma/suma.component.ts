import { Component } from '@angular/core';
import { OperacionComponent } from '../../components/operacion/operacion.component';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [OperacionComponent],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.scss'
})
export class SumaComponent {
  operacion: string = "+";
}
