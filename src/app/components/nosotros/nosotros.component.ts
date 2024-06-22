import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule, InfoComponent,
        FooterComponent
    ]
})
export class NosotrosComponent { }
