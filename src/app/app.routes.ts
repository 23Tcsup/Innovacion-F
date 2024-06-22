import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { VoluntariadoComponent } from './components/voluntariado/voluntariado.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'testimonios', component: TestimoniosComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'blog', component: BlogComponent},
    { path: 'solicitudes', component: SolicitudesComponent},
    { path: 'voluntariado', component: VoluntariadoComponent},
    { path: 'convocatoria', component: ConvocatoriaComponent },
    { path: 'contacto', component: ContactoComponent },
];
