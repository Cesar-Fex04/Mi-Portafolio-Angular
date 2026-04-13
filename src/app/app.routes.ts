import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { NosotrosComponent } from './nosotros/nosotros';
import { ServiciosComponent } from './servicios/servicios';
import { ContactoComponent } from './contacto/contacto';
import { NotFoundComponent } from './not-found/not-found';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: NotFoundComponent }
];