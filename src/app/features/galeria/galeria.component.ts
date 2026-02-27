import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { backdropAnimation, modalAnimation } from '../../shared/animations';

interface DishItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  animations: [modalAnimation, backdropAnimation],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  selectedDish = signal<DishItem | null>(null);

  readonly categories = ['Todos', 'Entradas', 'Principales', 'Postres', 'Bebidas'];
  activeCategory = signal('Todos');
  animating = signal(false);

  readonly dishes: DishItem[] = [
    {
      id: 1,
      name: 'Tártare de Salmón',
      category: 'Entradas',
      image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=80',
      description: 'Salmón fresco marinado con cítricos, caviar y brioche tostado.',
    },
    {
      id: 2,
      name: 'Branzino a la Plancha',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80',
      description: 'Filete de branzino con espárragos, limón confitado y aceite de trufa.',
    },
    {
      id: 3,
      name: 'Filete Wagyu 8+',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1558030006-4e76b3b3b4b0?w=600&q=80',
      description: 'Corte premium de wagyu con salsa de vino tinto y papas trufadas.',
    },
    {
      id: 4,
      name: 'Tiramisú Artesanal',
      category: 'Postres',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
      description: 'Clásico italiano con café de origen, mascarpone y cacao belga.',
    },
    {
      id: 5,
      name: 'Carpaccio de Res',
      category: 'Entradas',
      image: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?w=600&q=80',
      description: 'Láminas de res, rúcula, parmesano y vinagreta balsámica.',
    },
    {
      id: 6,
      name: 'Pasta Trufa Negra',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&q=80',
      description: 'Fettuccine artesanal con crema de trufa negra y parmesano 36 meses.',
    },
    {
      id: 7,
      name: 'Panna Cotta de Frutos',
      category: 'Postres',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
      description: 'Suave panna cotta con coulis de frutos rojos y menta fresca.',
    },
    {
      id: 8,
      name: 'Cóctel Signature',
      category: 'Bebidas',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
      description: 'Mezcla exclusiva de la casa con notas de maracuyá y jengibre.',
    },
    {
      id: 9,
      name: 'Sashimi Selection',
      category: 'Entradas',
      image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80',
      description: 'Selección de atún, salmón y hamachi con ponzu y microgreens.',
    },
    {
      id: 10,
      name: 'Risotto Porcini',
      category: 'Principales',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80',
      description: 'Risotto cremoso con hongos porcini, mantequilla de hierbas y parmesano.',
    },
    {
      id: 11,
      name: 'Mousse de Chocolate',
      category: 'Postres',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
      description: 'Mousse de chocolate 72% con avellanas caramelizadas y flor de sal.',
    },
    {
      id: 12,
      name: 'Gin Tónic Premium',
      category: 'Bebidas',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
      description: 'Gin botánico con tónica artesanal, pepino, enebro y limón.',
    },
  ];

  /** Computed filtered dishes based on active category */
  filteredDishes = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Todos' ? this.dishes : this.dishes.filter((d) => d.category === cat);
  });

  setCategory(cat: string) {
    if (cat === this.activeCategory()) return;
    // Fade out → switch → fade in
    this.animating.set(true);
    setTimeout(() => {
      this.activeCategory.set(cat);
      // Tiny delay so DOM updates before fade-in triggers
      requestAnimationFrame(() => {
        this.animating.set(false);
      });
    }, 300);
  }

  openModal(dish: DishItem) {
    this.selectedDish.set(dish);
  }
  closeModal() {
    this.selectedDish.set(null);
  }
}
