import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../domain/cliente';
import { ServiceJavaService } from '../../services/service-java.service';

@Component({
  selector: 'app-java',
  standalone: true,
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class JavaComponent implements OnInit {
  
  selectedCliente: Cliente = { cedula: '', direccion: '', nombre: '' };
  clientes: Cliente[] = [];
  result: any;

  constructor(private clientesService: ServiceJavaService) {}
    
  ngOnInit(): void {
    this.getAllClientes();
  }

  onSubmit(): void {
    console.log('Formulario enviado');
    this.guardar(this.selectedCliente);
  }

  guardar(cliente: Cliente): void {
    console.log('Datos del cliente:', cliente);
    this.clientesService.createCliente(cliente).subscribe({
      next: data => {
        this.result = data;
        console.log('Cliente creado:', this.result);
        this.resetForm();
        this.getAllClientes(); // Refresca la lista de clientes después de crear uno nuevo
      },
      error: err => {
        console.error('Error al crear el cliente:', err);
      }
    });
  }

  getAllClientes(): void {
    this.clientesService.getAllClientes().subscribe({
      next: data => {
        this.clientes = data;
        console.log('Clientes:', this.clientes);
      },
      error: err => {
        console.error('Error al obtener los clientes:', err);
      }
    });
  }

  resetForm(): void {
    this.selectedCliente = { cedula: '', direccion: '', nombre: '' };
  }
}
