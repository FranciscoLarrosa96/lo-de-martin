import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diferencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferencias.component.html',
  styleUrl: './diferencias.component.scss',
})
export class DiferenciasComponent {
  readonly items = [
    {
      icon: '🏆',
      title: 'Calidad Premium',
      desc: 'Insumos de primera calidad con proveedores certificados. Nunca comprometemos el sabor.',
    },
    {
      icon: '🔄',
      title: 'Renovación Constante',
      desc: 'Nuestro menú rota cada semana para que siempre tengas algo nuevo que descubrir.',
    },
    {
      icon: '🍷',
      title: 'Sommelier a tu mesa',
      desc: 'Maridaje personalizado con más de 80 etiquetas de vinos nacionales e importados.',
    },
    {
      icon: '🎭',
      title: 'Experiencias Privadas',
      desc: 'Salones exclusivos para eventos corporativos, cumpleaños y celebraciones especiales.',
    },
    {
      icon: '🌱',
      title: 'Compromiso sustentable',
      desc: 'Reducción de residuos, productos locales y packaging biodegradable.',
    },
    {
      icon: '👶',
      title: 'Menú infantil premium',
      desc: 'Opciones pensadas para los más pequeños. La magia también es para ellos.',
    },
  ];
}
