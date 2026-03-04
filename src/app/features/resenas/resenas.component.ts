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
      name: 'Jorge Lascano',
      avatar: 'J',
      rating: 5,
      time: 'hace 2 meses',
      comment:
        'Excelente lugar, primera vez que venimos, parrilla en vivo excelente, pescados en vivo excelente, pastas también cocina en vivo!! Muchos postres y entradas de todo tipo, super fresco todo !!! La atención un 10 !!',
    },
    {
      name: 'Esteban Palermo',
      avatar: 'E',
      rating: 5,
      time: 'hace un mes',
      comment: 'Muy bueno para volver siempre mucha variedad de platos.',
    },
    {
      name: 'Sebastian Ibáñez',
      avatar: 'S',
      rating: 5,
      time: 'hace un mes',
      comment:
        'Fuimos por primera vez anoche y de casualidad. Era auto servicio (diferentes tipos de comida). Excelente calidad en la comida, bebidas y postres. La atención de los empleados es excelente. Nos fuimos más que satisfechos. Definitivamente volveremos.',
    },
    {
      name: 'Claudio Felisatti',
      avatar: 'C',
      rating: 5,
      time: 'hace una semana',
      comment:
        'Impecable, la comida muy variada y fresco. La atención muy bien también. Muy recomendable.',
    },
    {
      name: 'Liza Acevedo',
      avatar: 'L',
      rating: 5,
      time: 'hace 7 meses',
      comment:
        'Riquísimo todo!!! Productos frescos y la atención de los mozos excelente. A nosotras nos tocó Gustavo, un genio, nos guió y nos recomendó varios platos.',
    },
    {
      name: 'Aye',
      avatar: 'A',
      rating: 5,
      time: 'hace una semana',
      comment:
        'La comida bien fresca, se notaba que estaba hecha en el día. Los mozos amables. Los baños limpios, todo bien. Un buen tenedor libre.',
    },
    {
      name: 'Nancy Miranda',
      avatar: 'N',
      rating: 5,
      time: 'hace 5 meses',
      comment:
        'Que hermoso el nuevo local!! Todo riquísimo como siempre!! Lo más especial la atención de los mozos!!',
    },
    {
      name: 'Flabia Paco',
      avatar: 'F',
      rating: 5,
      time: 'hace 8 meses',
      comment:
        '#deliciaentandil me encantó el lugar, la excelente atención de las mozas y mozos. La comida riquísima y los tragos que te preparan son deliciosos. Recomendable vallan @alodemartin y no se olviden de reservar.',
    },
    {
      name: 'María Verónica Castro',
      avatar: 'M',
      rating: 5,
      time: 'hace un año',
      comment:
        'Cada vez que vamos a Tandil es nuestra parada oficial porque la comida es fresca, hay variedad y a los que disfrutan comer en abundancia es el lugar perfecto. Buena atención y ahora que se mudaron el lugar es mucho más amplio 💗',
    },
    {
      name: 'Alejandro Ruiz',
      avatar: 'A',
      rating: 5,
      time: 'hace 5 meses',
      comment:
        'La atención muy buena, hay variedad de entradas, carnes, pescado y pastas los postres riquísimos.',
    },
    {
      name: 'Pablo Di Monte',
      avatar: 'P',
      rating: 5,
      time: 'hace 3 semanas',
      comment:
        'Excelente comedor libre. Muy buena la calidad y variedad de la comidas y postres. Es ideal para compartir en familia. Ambiente un poco ruidoso pero acojerdor.',
    },
    {
      name: 'Jess Dangelo',
      avatar: 'J',
      rating: 5,
      time: 'hace 4 meses',
      comment:
        'Recomendable al 1000%!! Todo excelente!! La comida variada, fresca y abundante (había tanto que era imposible elegir), el lugar limpio, amplio y accesible, la atención fue de lujo! Desde l@s camarer@s y el maitre hasta el propio dueño qué trabaja con ellos a la par. Realmente nos salvaron y nos ayudaron a llegar a tiempo a la terminal para no perder el bus de vuelta a casa!! Gracias!! Pronto volveremos!!',
    },
    {
      name: 'JOA M',
      avatar: 'J',
      rating: 5,
      time: 'hace 8 meses',
      comment:
        'Excelente lugar para una comida, productos frescos y variados, seguro que está el que más te gusta.',
    },
    {
      name: 'Carolina Barrios',
      avatar: 'C',
      rating: 5,
      time: 'hace 7 meses',
      comment: 'Riquísimo, se come muy bien. Recomiendo reserva e ir temprano.',
    },
    {
      name: 'Diego Nahuel',
      avatar: 'D',
      rating: 5,
      time: 'hace 2 años',
      comment:
        'Muy buen lugar. Tenedor libre, comida riquísima y muy buenos postres. Precio accesible para las porciones que se pueden comer. Super recomendable.',
    },
    {
      name: 'Lucas Cortez',
      avatar: 'L',
      rating: 5,
      time: 'hace 10 meses',
      comment: 'Amplia variedad de platos para servirse y muy exquisita la carne 10/10.',
    },
    {
      name: 'Nancy Frizzera',
      avatar: 'N',
      rating: 5,
      time: 'hace 2 años',
      comment:
        'Excelente, salon grande, muy prolijos, buena presentación de los alimentos. Mucha variedad y muy buena calidad de entradas, platos principales y postres. Buen precio. Super recomendable. La primera vez que comí tan bien en un tenedor libre. Los empleados muy atentos.',
    },
  ];

  // Duplicar para el efecto infinito
  get doubledReviews() {
    return [...this.reviews, ...this.reviews];
  }
}
