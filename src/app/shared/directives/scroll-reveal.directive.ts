import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ScrollRevealService } from '../../core/services/scroll-reveal.service';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationClass: string = 'reveal-up';
  @Input() revealDelay: string = '0ms';
  @Input() revealThreshold: number = 0.15;

  private el = inject(ElementRef);
  private scrollReveal = inject(ScrollRevealService);
  private unobserve: (() => void) | null = null;

  ngOnInit(): void {
    const native = this.el.nativeElement as HTMLElement;
    native.classList.add('reveal-hidden');
    native.style.transitionDelay = this.revealDelay;

    this.unobserve = this.scrollReveal.observe(native, this.revealThreshold, () => {
      native.classList.remove('reveal-hidden');
      native.classList.add(this.animationClass || 'reveal-up', 'revealed');
    });
  }

  ngOnDestroy(): void {
    this.unobserve?.();
  }
}
