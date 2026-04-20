import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';

import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: '**',         component: NotFoundComponent }
];