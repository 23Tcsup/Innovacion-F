import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
interface Testimonial {
  img: string;
  name: string;
  position: string;
  text: string;
}
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
export class TestimoniosComponent implements OnInit { 

   testimonials: Testimonial[] = [
    {
      img: 'assets/img/testimonial-1.jpg',
      name: 'Juanito Perez',
      position: 'Maestro',
      text: 'Estoy realmente impresionado por el impacto positivo ...'
    },
    {
      img: 'assets/img/testimonial-2.jpg',
      name: 'Maria Sanchez',
      position: 'Estudiante',
      text: 'Las actividades benéficas de esta organización son realmente inspiradoras...'
    },
    {
      img: 'assets/img/testimonial-3.jpg',
      name: 'Juan Carlos Rodriguez',
      position: 'Ingeniero',
      text: 'Desde que me uní como voluntario, he sido testigo del impacto positivo...'
    },
    {
      img: 'assets/img/testimonial-4.jpg',
      name: 'Adriana Moreno',
      position: 'Diseñadora',
      text: 'Me encanta formar parte de estas actividades benéficas...'
    }
  ];

  testimonialGroups: Testimonial[][] = [];

  ngOnInit(): void {
    this.groupTestimonials();
  }

  groupTestimonials(): void {
    const groupSize = 3;
    for (let i = 0; i < this.testimonials.length; i += groupSize) {
      this.testimonialGroups.push(this.testimonials.slice(i, i + groupSize));
    }
  }
  
}
