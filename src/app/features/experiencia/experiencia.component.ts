import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  readonly features = [
    {
      icon: '🌿',
      title: 'Ingredientes frescos',
      desc: 'Selección diaria del mercado, trazabilidad garantizada.',
    },
    {
      icon: '👨‍🍳',
      title: 'Chefs de autor',
      desc: 'Cocina viva, pensada, emocionante en cada detalle.',
    },
    { icon: '🕯️', title: 'Ambiente de lujo', desc: 'Diseño interior que despierta los sentidos.' },
    { icon: '♾️', title: 'Sin límites', desc: 'Todo lo que desees comer, las veces que quieras.' },
  ];
}
