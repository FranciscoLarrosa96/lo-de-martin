import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

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
  @ViewChild('lgContainer') lgContainerRef!: ElementRef<HTMLElement>;

  private lgInstance: ReturnType<typeof lightGallery> | null = null;

  protected currentIndex = signal(0);

  protected readonly carouselImages: GalleryImage[] = [
    { src: '/assets/img/ldm-desk-2.avif', alt: 'Platos del restaurante Lo de Martín' },
    { src: '/assets/img/ldm-desk-3.avif', alt: 'Ambiente del restaurante Lo de Martín' },
    { src: '/assets/img/ldm-desk-4.avif', alt: 'Cocina auténtica en Lo de Martín' },
    { src: '/assets/img/ldm-desk-5.avif', alt: 'Experiencia gastronómica en Lo de Martín' },
    { src: '/assets/img/ldm-desk-6.avif', alt: 'Sabores únicos en Lo de Martín' },
  ];

  protected readonly galleryDynamicEl = this.carouselImages.map((img) => ({
    src: img.src,
    thumb: img.src,
    alt: img.alt,
  }));

  ngAfterViewInit(): void {
    this.lgInstance = lightGallery(this.lgContainerRef.nativeElement, {
      dynamic: true,
      dynamicEl: this.galleryDynamicEl,
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      licenseKey: '0000-0000-0000-0000',
    });
  }

  ngOnDestroy(): void {
    this.lgInstance?.destroy();
  }

  protected openGallery(index: number): void {
    this.lgInstance?.openGallery(index);
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
