import { Component } from '@angular/core';
import { OperacionComponent } from '../../components/operacion/operacion.component';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [OperacionComponent],
  templateUrl: './division.component.html',
  styleUrl: './division.component.scss'
})
export class DivisionComponent {
  operacion: string = "/"
}
