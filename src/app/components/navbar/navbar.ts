import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly win = this.document.defaultView!;

  protected scrolled = signal(false);
  protected menuOpen = signal(false);
  protected activeSection = signal('inicio');

  private scrollListener!: () => void;

  readonly navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'menu', label: 'Menú' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  ngOnInit(): void {
    this.scrollListener = () => {
      this.scrolled.set(this.win.scrollY > 80);
      this.updateActiveSection();
    };
    this.win.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy(): void {
    this.win.removeEventListener('scroll', this.scrollListener);
  }

  private updateActiveSection(): void {
    const ids = this.navLinks.map((l) => l.id);
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = this.document.getElementById(ids[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(ids[i]);
        return;
      }
    }
    this.activeSection.set('inicio');
  }

  protected scrollTo(id: string): void {
    this.menuOpen.set(false);
    const el = this.document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
