import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type MenuTab = 'almuerzo' | 'cena';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSection {
  tab: MenuTab;
  label: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  protected activeTab = signal<MenuTab>('almuerzo');

  protected readonly menuSections: MenuSection[] = [
    {
      tab: 'almuerzo',
      label: 'Almuerzo',
      items: [
        {
          name: 'Ensalada del Chef',
          description: 'Mix de verdes, tomates cherry, nueces y aderezo de mostaza artesanal.',
          price: '$2.200',
        },
        {
          name: 'Carpaccio de Lomo',
          description: 'Finas láminas de lomo, rúcula, parmesano y aceite de oliva.',
          price: '$3.500',
        },
        {
          name: 'Pasta Casera al Pesto',
          description: 'Tagliatelle elaborado a mano con salsa pesto fresco y piñones.',
          price: '$2.800',
        },
        {
          name: 'Milanesa Napolitana',
          description: 'Milanesa de ternera con tomate, jamón y mozzarella gratinada.',
          price: '$3.200',
        },
        {
          name: 'Pollo a la Provenzal',
          description: 'Suprema de pollo al horno con manteca de ajo y perejil, papas rústicas.',
          price: '$3.000',
        },
        {
          name: 'Risotto de Hongos',
          description: 'Arroz arborio con hongos de temporada, parmesano y manteca.',
          price: '$3.100',
        },
        {
          name: 'Tarta del Día',
          description: 'Preparación diaria con ingredientes de estación. Consultar disponibilidad.',
          price: '$2.000',
        },
        {
          name: 'Budín de Pan',
          description: 'Receta casera con crema inglesa y caramelo. El clásico de lo de Martín.',
          price: '$1.800',
        },
      ],
    },
    {
      tab: 'cena',
      label: 'Cena',
      items: [
        {
          name: 'Tabla de Fiambres y Quesos',
          description:
            'Selección de embutidos artesanales, quesos curados y encurtidos de la casa.',
          price: '$4.500',
        },
        {
          name: 'Provoleta a la Plancha',
          description: 'Provoleta ahumada con orégano fresco, tomate asado y aceite de oliva.',
          price: '$2.800',
        },
        {
          name: 'Bife de Chorizo',
          description: 'Corte prime de 350g. a punto de cocción, con guarnición a elección.',
          price: '$5.500',
        },
        {
          name: 'Entrecot al Roquefort',
          description: 'Entrecot al punto con salsa de roquefort, cebolla caramelizada y papas.',
          price: '$5.800',
        },
        {
          name: 'Cazuela de Mariscos',
          description: 'Langostinos, mejillones y calamares en salsa de tomate y azafrán.',
          price: '$5.200',
        },
        {
          name: 'Penne a la Vodka',
          description: 'Pasta con salsa rosa al vodka, panceta y albahaca fresca.',
          price: '$3.800',
        },
        {
          name: 'Risotto de Champiñones',
          description: 'Cremoso risotto con champiñones salteados, trufa negra y parmesano.',
          price: '$3.600',
        },
        {
          name: 'Tiramisú Artesanal',
          description: 'Postre clásico italiano elaborado a diario con mascarpone y café espresso.',
          price: '$2.200',
        },
      ],
    },
  ];

  protected get activeItems(): MenuItem[] {
    return this.menuSections.find((s) => s.tab === this.activeTab())?.items ?? [];
  }

  protected setTab(tab: MenuTab): void {
    this.activeTab.set(tab);
  }
}
