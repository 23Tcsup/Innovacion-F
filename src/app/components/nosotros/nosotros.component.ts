import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule, InfoComponent
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
