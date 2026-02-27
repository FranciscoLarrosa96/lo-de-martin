import { Component, inject, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './core/loader/loader.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WhatsappButtonComponent } from './core/whatsapp-button/whatsapp-button.component';
import { FooterComponent } from './core/footer/footer.component';

import { HeroComponent } from './features/hero/hero.component';
import { ExperienciaComponent } from './features/experiencia/experiencia.component';
import { GaleriaComponent } from './features/galeria/galeria.component';
import { ResenasComponent } from './features/resenas/resenas.component';
import { MenuComponent } from './features/menu/menu.component';
import { DiferenciasComponent } from './features/diferencias/diferencias.component';
import { ReservasComponent } from './features/reservas/reservas.component';
import { UbicacionComponent } from './features/ubicacion/ubicacion.component';
import AOS from 'aos';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    NavbarComponent,
    WhatsappButtonComponent,
    FooterComponent,
    HeroComponent,
    ExperienciaComponent,
    GaleriaComponent,
    ResenasComponent,
    MenuComponent,
    DiferenciasComponent,
    ReservasComponent,
    UbicacionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly seo = inject(SeoService);

  constructor() {
    afterNextRender(() => {
      this.seo!.setDefault();
      AOS.init({
        duration: 900,
        easing: 'ease-out-quad',
        once: true,
        offset: 80,
      });
    });
  }
}
