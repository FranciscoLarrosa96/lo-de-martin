import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lo-de-martin');

  /**
   * Inicializa la librería AOS para animaciones al hacer scroll. Configura la duración, tipo de easing y si las animaciones se repiten o no.
   */
  private initAOS(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }
}
