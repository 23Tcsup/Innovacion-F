import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './voluntariado.component.html',
  styleUrl: './voluntariado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntariadoComponent { }
