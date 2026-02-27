import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.scss',
})
export class ResenasComponent {
  readonly reviews = [
    {
      name: 'Valentina G.',
      avatar: 'V',
      rating: 5,
      comment:
        'Una experiencia sublime. Los platos eran verdaderas obras de arte y el servicio impecable. Volvería cada semana sin dudar.',
    },
    {
      name: 'Marcos R.',
      avatar: 'M',
      rating: 5,
      comment:
        'El filete wagyu fue lo mejor que comí en años. El ambiente es de otro nivel, elegante pero cálido. 100% recomendado.',
    },
    {
      name: 'Laura H.',
      avatar: 'L',
      rating: 5,
      comment:
        'Sorprendente variedad y calidad. Vine por mi cumpleaños y fue mágico. El postre de trufa negra, increíble.',
    },
    {
      name: 'Diego P.',
      avatar: 'D',
      rating: 5,
      comment:
        'Reservé para un aniversario y el personal superó todas mis expectativas. Detallistas, atentos y la cocina es brillante.',
    },
    {
      name: 'Sofía M.',
      avatar: 'S',
      rating: 5,
      comment:
        'El ambiente te transporta. Luz perfecta, música cuidada, y platos que realmente emocionan. Luxury dining real.',
    },
    {
      name: 'Andrés T.',
      avatar: 'A',
      rating: 5,
      comment:
        'Primera vez que visito y quedé enamorado del lugar. La pasta trufada y el carpaccio fueron mis favoritos. ¡Ya reservé para volver!',
    },
    {
      name: 'Carolina V.',
      avatar: 'C',
      rating: 5,
      comment:
        'Restaurante de categoría con precios accesibles para la calidad que ofrecen. Los postres son espectaculares.',
    },
    {
      name: 'Felipe S.',
      avatar: 'F',
      rating: 5,
      comment:
        'El mejor tenedor libre que conozco. No es todo lo mismo, cada plato tiene identidad y eso se nota.',
    },
  ];

  // Duplicar para el efecto infinito
  get doubledReviews() {
    return [...this.reviews, ...this.reviews];
  }
}
