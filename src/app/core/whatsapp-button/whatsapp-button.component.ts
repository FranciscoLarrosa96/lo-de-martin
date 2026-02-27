import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      class="wa-btn"
      href="https://wa.me/542494210572?text=Hola!%20Quisiera%20hacer%20una%20reserva"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M22.85 9.14A9.5 9.5 0 0 0 16 6.5a9.5 9.5 0 0 0-8.23 14.24L6.5 25.5l4.9-1.28A9.5 9.5 0 0 0 25.5 16a9.5 9.5 0 0 0-2.65-6.86zm-6.85 14.6a7.87 7.87 0 0 1-4.02-1.1l-.29-.17-2.9.76.77-2.82-.19-.3A7.9 7.9 0 1 1 16 23.74zm4.33-5.92c-.24-.12-1.4-.69-1.61-.77-.22-.08-.38-.12-.54.12s-.62.77-.76.93c-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18a7.15 7.15 0 0 1-1.31-1.65c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z"
          fill="#fff"
        />
      </svg>
      <span class="wa-btn__tooltip">¡Reserva ahora!</span>
    </a>
  `,
  styles: [
    `
      @use '../../../styles/variables' as *;

      .wa-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: $z-float;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 6px 24px rgba(#25d366, 0.45);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        animation:
          waPop 0.5s 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) both,
          waPulse 3s 3s ease-in-out infinite;

        svg {
          width: 58px;
          height: 58px;
        }

        &:hover {
          transform: scale(1.12);
          box-shadow: 0 10px 32px rgba(#25d366, 0.6);

          .wa-btn__tooltip {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }

      .wa-btn__tooltip {
        position: absolute;
        right: calc(100% + 12px);
        background: #25d366;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.4rem 0.9rem;
        border-radius: 99px;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: all 0.25s ease;
        pointer-events: none;
      }

      @keyframes waPop {
        from {
          opacity: 0;
          transform: scale(0);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes waPulse {
        0%,
        100% {
          box-shadow: 0 6px 24px rgba(#25d366, 0.45);
        }
        50% {
          box-shadow:
            0 6px 40px rgba(#25d366, 0.7),
            0 0 0 10px rgba(#25d366, 0.12);
        }
      }
    `,
  ],
})
export class WhatsappButtonComponent {}
