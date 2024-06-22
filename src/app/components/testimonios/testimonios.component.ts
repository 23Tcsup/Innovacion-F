import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimoniosComponent { 
  
}
