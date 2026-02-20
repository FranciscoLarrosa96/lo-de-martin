import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
  afterNextRender,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import GLightbox from 'glightbox';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnDestroy {
  private glInstance: ReturnType<typeof GLightbox> | null = null;

  protected currentIndex = signal(0);
  protected readonly isMobile = signal(false);
  protected carouselImages = signal<GalleryImage[]>([]);
  protected readonly carouselImagesDesktop: GalleryImage[] = [
    { src: 'assets/img/ldm-desk-2.avif', alt: 'Ambiente del restaurante Lo de Martín' },
    { src: 'assets/img/ldm-desk-3.avif', alt: 'Cocina auténtica en Lo de Martín' },
    { src: 'assets/img/ldm-desk-4.avif', alt: 'Experiencia gastronómica en Lo de Martín' },
    { src: 'assets/img/ldm-desk-5.avif', alt: 'Sabores únicos en Lo de Martín' },
    { src: 'assets/img/ldm-desk-6.avif', alt: 'Restaurante Lo de Martín en su máxima expresión' },
    { src: 'assets/img/ldm-desk-7.avif', alt: 'Platos deliciosos en Lo de Martín' },
    { src: 'assets/img/ldm-desk-8.avif', alt: 'Ambiente acogedor en Lo de Martín' },
    { src: 'assets/img/ldm-desk-9.avif', alt: 'Cocina de calidad en Lo de Martín' },
    { src: 'assets/img/ldm-desk-10.avif', alt: 'Experiencia culinaria en Lo de Martín' },
  ];
  protected readonly carouselImagesMobile: GalleryImage[] = [
    { src: 'assets/img/ldm-mob-2.avif', alt: 'Ambiente del restaurante Lo de Martín' },
    { src: 'assets/img/ldm-mob-3.avif', alt: 'Cocina auténtica en Lo de Martín' },
    { src: 'assets/img/ldm-mob-4.avif', alt: 'Experiencia gastronómica en Lo de Martín' },
    { src: 'assets/img/ldm-mob-5.avif', alt: 'Sabores únicos en Lo de Martín' },
    { src: 'assets/img/ldm-mob-6.avif', alt: 'Restaurante Lo de Martín en su máxima expresión' },
    { src: 'assets/img/ldm-mob-7.avif', alt: 'Platos deliciosos en Lo de Martín' },
    { src: 'assets/img/ldm-mob-8.avif', alt: 'Platos deliciosos en Lo de Martín' },
    { src: 'assets/img/ldm-mob-9.avif', alt: 'Ambiente acogedor en Lo de Martín' },
    { src: 'assets/img/ldm-mob-10.avif', alt: 'Experiencia culinaria en Lo de Martín' },
  ];

  constructor() {
    afterNextRender(() => {
      this.isMobile.set(window.innerWidth < 768);
      this.carouselImages().push(
        ...(this.isMobile() ? this.carouselImagesMobile : this.carouselImagesDesktop),
      );
      this.glInstance = GLightbox({
        elements: this.carouselImages().map((img) => ({
          href: img.src,
          alt: img.alt,
          type: 'image',
        })),
        loop: true,
        touchNavigation: true,
        keyboardNavigation: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        slideEffect: 'slide',
      } as Parameters<typeof GLightbox>[0]);
    });
  }

  ngOnDestroy(): void {
    this.glInstance?.destroy();
  }

  protected openGallery(index: number): void {
    if (!this.glInstance) return;
    this.glInstance.openAt(index);
  }

  protected prev(): void {
    this.currentIndex.update(
      (i) => (i - 1 + this.carouselImages().length) % this.carouselImages().length,
    );
  }

  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.carouselImages().length);
  }

  protected setIndex(i: number): void {
    this.currentIndex.set(i);
  }
}
