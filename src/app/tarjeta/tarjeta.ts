import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class TarjetaComponent {

  @Input() nombre: string = 'Julio Cesar Lopez Felix';
  @Input() edad: number = 22;
  @Input() carrera: string = 'Ingeniería en Sistemas de Información';
  @Input() universidad: string = 'Universidad de Sonora';
  

  likes: number = 0;
  mostrarMensaje: boolean = false;
  mensajeLike: string = '';

  habilidades: string[] = [
    'JavaScript', 'TypeScript', 'Angular',
    'Python', 'HTML/CSS', 'Node.js', 'Git'
  ];

  darLike(): void {
    this.likes++;
    this.mostrarMensaje = true;

    if (this.likes === 1) {
      this.mensajeLike = '¡Gracias por el like! 🙌';
    } else if (this.likes === 5) {
      this.mensajeLike = '¡5 likes! ¡Qué bueno! 🔥';
    } else if (this.likes === 10) {
      this.mensajeLike = '¡10 likes! ¡Eres increíble! 🚀';
    } else {
      this.mensajeLike = `¡${this.likes} likes! Sigue apoyando 💛`;
    }

    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 2000);
  }

  resetearLikes(): void {
    this.likes = 0;
    this.mostrarMensaje = false;
  }
}