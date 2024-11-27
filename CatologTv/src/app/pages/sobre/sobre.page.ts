import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage {
  // Usamos HostBinding para alterar o estilo do elemento
  @HostBinding('style.color') textColor: string = 'black'; // Cor inicial do texto

  // Método para alterar a cor ao passar o mouse
  @HostListener('mouseenter') onMouseEnter() {
    this.textColor = 'blue'; // Mudar a cor para azul quando o mouse entra
  }

  // Método para restaurar a cor ao sair o mouse
  @HostListener('mouseleave') onMouseLeave() {
    this.textColor = 'black'; // Restaurar a cor original
  }

  constructor() {}
}
