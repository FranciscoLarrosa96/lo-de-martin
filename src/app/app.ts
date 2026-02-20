import { ChangeDetectionStrategy, Component, AfterViewInit, inject } from '@angular/core';
import AOS from 'aos';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { MenuComponent } from './components/menu/menu';
import { ServicesComponent } from './components/services/services';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { SeoService } from './core/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements AfterViewInit {
  private readonly seo = inject(SeoService);

  ngAfterViewInit(): void {
    this.seo.setDefault();
    AOS.init({
      duration: 900,
      easing: 'ease-out-quad',
      once: true,
      offset: 80,
    });
  }
}
