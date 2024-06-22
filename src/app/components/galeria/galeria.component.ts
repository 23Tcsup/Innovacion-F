import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleriaComponent {

  slideIndex: number = 1;
  modalDisplay: string = "none";

  slides: string[] = [
    'assets/img/gallery1.jpeg',
    'assets/img/gallery2.jpeg',
    'assets/img/gallery3.jpg',
    'assets/img/gallery4.jpeg',
    'assets/img/gallery5.jpeg',
    'assets/img/gallery6.jpeg'
  ];

  openModal(): void {
    this.modalDisplay = "block";
  }

  closeModal(): void {
    this.modalDisplay = "none";
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
  }
  
}
