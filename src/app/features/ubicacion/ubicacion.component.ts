import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="ubicacion" id="ubicacion">
      <div class="container">
        <div class="ubicacion__header">
          <p class="section-label" data-aos="fade-up">Ubicación</p>
          <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Encuéntranos</h2>
        </div>
        <div class="ubicacion__inner" data-aos="fade-up" data-aos-delay="200">
          <div class="ubicacion__map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12692.140711742251!2d-59.145739!3d-37.3179944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f85ad4ea001%3A0x13e054d12fef1237!2sLo%20de%20Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1771554463120!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de Lo de Martín en Tandil, Buenos Aires"
            ></iframe>
          </div>
          <div class="ubicacion__info">
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📍</span>
              <div>
                <h4>Dirección</h4>
                <p>Las Heras 560, Tandil<br />Buenos Aires, Argentina</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">🕐</span>
              <div>
                <h4>Horarios</h4>
                <p>Lunes a domingo<br />Mediodía: 12:00 – 15:00<br />Noche: 20:00 – 00:00</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📞</span>
              <div>
                <h4>Reservas directas</h4>
                <p>+54 249 421-0572</p>
              </div>
            </div>
            <div class="ubicacion__detail">
              <span class="ubicacion__detail-icon">📱</span>
              <div>
                <h4>Redes sociales</h4>
                <p>
                  <a
                    href="https://www.instagram.com/lodemartintandil/?hl=es"
                    target="_blank"
                    style="color: rgba(255,255,255,0.65); transition: color 0.2s;"
                    >&#64;lodemartintandil</a
                  >
                  <br />
                  <a
                    href="https://www.facebook.com/lodemartintandil/?locale=es_LA"
                    target="_blank"
                    style="color: rgba(255,255,255,0.65); transition: color 0.2s;"
                    >Facebook</a
                  >
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/maps?q=Lo+de+Mart%C3%ADn+Tandil"
              target="_blank"
              class="btn-primary ubicacion__btn"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use '../../../styles/variables' as *;
      @use '../../../styles/mixins' as *;

      .ubicacion {
        @include section-padding;
        background: $color-dark-3;

        &__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        &__inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;

          @include lg {
            grid-template-columns: 1.4fr 1fr;
          }
        }

        &__map-wrap {
          border-radius: $radius-xl;
          overflow: hidden;
          height: 420px;
          border: 1px solid rgba(#fff, 0.07);
          box-shadow: $shadow-lg;

          iframe {
            filter: invert(0.85) hue-rotate(180deg) saturate(0.8);
          }
        }

        &__info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        &__detail {
          display: flex;
          gap: 1rem;
          align-items: flex-start;

          &-icon {
            font-size: 1.5rem;
            line-height: 1;
          }

          h4 {
            font-family: $font-body;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: $color-red;
            margin-bottom: 0.3rem;
          }

          p {
            font-size: 0.9rem;
            color: rgba(#fff, 0.65);
            line-height: 1.6;
          }
        }

        &__btn {
          align-self: flex-start;
        }
      }
    `,
  ],
})
export class UbicacionComponent {}
