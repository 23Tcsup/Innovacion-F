import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Servicio } from '../../models/modelos';
import { ServiciosService } from '../../services/servicios.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit{
  solicitudForm: FormGroup;
  servicios: Servicio[] = [];
  constructor(private fb: FormBuilder, private serviciosService: ServiciosService) {
    this.solicitudForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      id_servicios: ['', Validators.required], 
      evidencia: [null, Validators.required] 
    });
  }

  ngOnInit(): void {
    this.loadServicios();
  }
  loadServicios(): void {
    this.serviciosService.getServicios().subscribe((data: Servicio[]) => {
      this.servicios = data;
    });
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.solicitudForm.patchValue({
        evidencia: file
      });
    }
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas enviar esta solicitud?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = new FormData();
          formData.append('nombre', this.solicitudForm.get('nombre')?.value);
          formData.append('correo', this.solicitudForm.get('correo')?.value);
          formData.append('telefono', this.solicitudForm.get('telefono')?.value);
          const servicioSeleccionado = this.solicitudForm.get('id_servicios')?.value;
          formData.append('servicio', servicioSeleccionado.nombre);
          formData.append('evidencia', this.solicitudForm.get('evidencia')?.value);

          this.serviciosService.createSolicitantes(formData).subscribe(
            response => {
              Swal.fire({
                icon: 'success',
                title: 'Solicitud enviada',
                text: 'Tu solicitud se ha enviado correctamente.',
                confirmButtonText: 'OK'
              }).then(() => {
                this.solicitudForm.reset(); 
              });
            },
            error => {
              Swal.fire({
                icon: 'error',
                title: 'Error al enviar',
                text: 'Tu solicitud no se ha enviado correctamente. Intenta de nuevo.',
                confirmButtonText: 'OK'
              });
            }
          );
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor completa todos los campos del formulario.',
        confirmButtonText: 'OK'
      });
    }
  }

}