import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Necesidades } from '../../models/modelos';
import { ServiciosService } from '../../services/servicios.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  necesidades: Necesidades[] = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this.serviciosService.getNecesidades().subscribe((data: Necesidades[]) => {
      this.necesidades = data;
    });
  }

}
 