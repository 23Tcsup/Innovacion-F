import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimoniosComponent } from "../testimonios/testimonios.component";

@Component({
    selector: 'app-voluntariado',
    standalone: true,
    templateUrl: './voluntariado.component.html',
    styleUrl: './voluntariado.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TestimoniosComponent
    ]
})
export class VoluntariadoComponent { }
