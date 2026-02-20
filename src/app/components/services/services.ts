import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  tagline: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  protected readonly activeCard = signal<number | null>(null);

  protected toggleCard(index: number): void {
    this.activeCard.update((current) => (current === index ? null : index));
  }
  protected readonly services: Service[] = [
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Catering',
      tagline: 'Cocina de autor para tus eventos.',
      description:
        'Llevamos la experiencia gastronómica de Lo de Martín a tu evento especial, con la misma calidad, sabor y pasión de siempre. Ideal para celebraciones, empresas y reuniones familiares.',
    },
    {
      icon: 'fa-solid fa-champagne-glasses',
      title: 'Eventos y Celebraciones',
      tagline: 'Hacemos memorable cada ocasión.',
      description:
        'Organizamos tu evento privado con menú personalizado, ambientación exclusiva y atención dedicada. Desde cenas íntimas hasta grandes celebraciones, cada detalle importa.',
    },
    {
      icon: 'fa-solid fa-door-open',
      title: 'Salón Privado',
      tagline: 'Intimidad y buen gusto en un solo lugar.',
      description:
        'Nuestro salón privado es el escenario perfecto para reuniones especiales, presentaciones o simplemente disfrutar de una cena sin interrupciones. Reservá con anticipación.',
    },
  ];
}
