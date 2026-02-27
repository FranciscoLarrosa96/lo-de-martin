import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly destacados = [
    {
      icon: '🥩',
      name: 'Cortes Premium',
      description:
        'Wagyu, Angus y Costilla de res al horno lento seleccionados por nuestros chefs.',
      price: 'Incluido',
      tag: 'Lo más pedido',
    },
    {
      icon: '🦞',
      name: 'Mariscos del día',
      description: 'Langostinos, calamares, mejillones y más. Frescos, con llegada diaria.',
      price: 'Incluido',
      tag: 'Temporada',
    },
    {
      icon: '🍝',
      name: 'Pastas Artesanales',
      description: 'Elaboradas en el momento, con salsas clásicas y de autor que enamoran.',
      price: 'Incluido',
      tag: "Chef's pick",
    },
    {
      icon: '🍱',
      name: 'Estación de Sushi',
      description: 'Rolls, nigiris y sashimi preparados al momento por nuestro sushiman.',
      price: 'Incluido',
      tag: 'Fans favorito',
    },
    {
      icon: '🫕',
      name: 'Fondues & Raclette',
      description: 'Quesos europeos fundidos con acompañamientos selectos. Una experiencia social.',
      price: 'Incluido',
      tag: 'Exclusivo viernes',
    },
    {
      icon: '🍮',
      name: 'Postres Artesanales',
      description: 'Tiramisú, soufflé de chocolate, macarons y más. El final perfecto.',
      price: 'Incluido',
      tag: 'Tentación',
    },
  ];
}
