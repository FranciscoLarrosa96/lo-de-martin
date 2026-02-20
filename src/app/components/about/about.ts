import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
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
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private glInstance: ReturnType<typeof GLightbox> | null = null;

  protected currentIndex = signal(0);

  protected readonly carouselImages: GalleryImage[] = [
    { src: 'assets/img/ldm-desk-2.avif', alt: 'Platos del restaurante Lo de Martín' },
    { src: 'assets/img/ldm-desk-3.avif', alt: 'Ambiente del restaurante Lo de Martín' },
    { src: 'assets/img/ldm-desk-4.avif', alt: 'Cocina auténtica en Lo de Martín' },
    { src: 'assets/img/ldm-desk-5.avif', alt: 'Experiencia gastronómica en Lo de Martín' },
    { src: 'assets/img/ldm-desk-6.avif', alt: 'Sabores únicos en Lo de Martín' },
  ];

  ngAfterViewInit(): void {
    this.glInstance = GLightbox({
      elements: this.carouselImages.map((img) => ({ href: img.src, alt: img.alt, type: 'image' })),
      loop: true,
      touchNavigation: true,
      keyboardNavigation: true,
      openEffect: 'fade',
      closeEffect: 'fade',
      slideEffect: 'slide',
    } as Parameters<typeof GLightbox>[0]);
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
      (i) => (i - 1 + this.carouselImages.length) % this.carouselImages.length,
    );
  }

  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.carouselImages.length);
  }

  protected setIndex(i: number): void {
    this.currentIndex.set(i);
  }
}
