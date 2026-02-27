import {
  trigger, state, style, animate, transition,
  query, stagger, keyframes, group, sequence
} from '@angular/animations';

// ---- Fade In ----
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease', style({ opacity: 1 }))
  ])
]);

// ---- Fade In Up ----
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('700ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// ---- Slide In Left ----
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-60px)' }),
    animate('700ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

// ---- Slide In Right ----
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(60px)' }),
    animate('700ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

// ---- Scale In ----
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.88)' }),
    animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

// ---- Stagger List ----
export const staggerList = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('120ms', [
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

// ---- Loader Out ----
export const loaderOut = trigger('loaderOut', [
  transition(':leave', [
    animate('600ms 300ms ease', style({ opacity: 0, transform: 'scale(1.05)' }))
  ])
]);

// ---- Modal ----
export const modalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9) translateY(30px)' }),
    animate('400ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
  ]),
  transition(':leave', [
    animate('250ms ease', style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' }))
  ])
]);

// ---- Overlay Backdrop ----
export const backdropAnimation = trigger('backdropAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('250ms ease', style({ opacity: 0 }))
  ])
]);
