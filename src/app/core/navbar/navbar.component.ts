import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  readonly navLinks = [
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Menú', href: '#menu' },
    { label: 'Contacto', href: '#reservas' },
    { label: 'Reseñas', href: '#resenas' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }

  scrollTo(href: string) {
    this.closeMobile();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
