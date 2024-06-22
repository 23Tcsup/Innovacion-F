import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [
    CommonModule, CarouselModule
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrouselComponent { 
 

  constructor() { }

  ngOnInit(): void {
  }
}
