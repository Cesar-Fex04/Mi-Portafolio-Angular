import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarjetaComponent } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  nombre = 'Julio Cesar Lopez Felix';
  edad = 22;
}