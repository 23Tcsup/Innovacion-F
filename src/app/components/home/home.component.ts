import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';
import { InfoComponent } from '../info/info.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule, CarrouselComponent, TestimoniosComponent, InfoComponent,
        FooterComponent
    ]
})
export class HomeComponent { }
