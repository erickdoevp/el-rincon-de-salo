<script setup lang="ts">
import { contacto, lugaresEntrega } from '../composables/useContenido';
import type { Hilo } from '../interfaces';

// Mapa de hilo -> clases utilitarias (evita clases dinámicas que Tailwind purga).
const fondos: Record<Hilo, string> = {
  amarillo: 'bg-hilo-amarillo',
  verde: 'bg-hilo-verde',
  azul: 'bg-hilo-azul',
  naranja: 'bg-hilo-naranja',
  rosa: 'bg-hilo-rosa',
};
</script>

<template>
  <section id="entregas" class="bg-crema-hondo/60 px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Entregas</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Cómo recibes tu tejido
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          {{ contacto.ubicacion }}. Elegimos juntas la forma de entrega que más te convenga.
        </p>
      </header>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(lugar, i) in lugaresEntrega"
          :key="lugar.id"
          data-reveal
          :style="{ '--reveal-delay': `${i * 80}ms` }"
        >
          <article class="flex h-full flex-col rounded-3xl bg-papel p-6 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]">
            <span
              :class="fondos[lugar.hilo]"
              class="flex h-12 w-12 items-center justify-center rounded-2xl text-papel"
              aria-hidden="true"
            >
              <!-- Punto de encuentro (pin) o envío (caja), según el tipo -->
              <svg
                v-if="lugar.tipo === 'persona'"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 21s-6.5-5.6-6.5-10a6.5 6.5 0 0113 0c0 4.4-6.5 10-6.5 10z" />
                <circle cx="12" cy="11" r="2.4" />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
                <path d="M3 8l9 5 9-5M12 13v8" />
              </svg>
            </span>
            <h3 class="mt-5 font-display text-lg font-bold text-tinta">{{ lugar.nombre }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-tinta-suave">{{ lugar.detalle }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
