import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-convocatoria',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './convocatoria.component.html',
  styleUrl: './convocatoria.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConvocatoriaComponent { }
