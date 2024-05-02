import { Component } from '@angular/core';
import { OperacionComponent } from '../../components/operacion/operacion.component';

@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [OperacionComponent],
  templateUrl: './resta.component.html',
  styleUrl: './resta.component.scss'
})
export class RestaComponent {
  operacion: string = "-"
}
