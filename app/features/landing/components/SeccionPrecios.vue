<script setup lang="ts">
import { precios } from '../composables/useContenido';
import type { Hilo } from '../interfaces';
import BotonWhatsApp from './BotonWhatsApp.vue';

// Mapa de hilo -> clases utilitarias (evita clases dinámicas que Tailwind purga).
const textos: Record<Hilo, string> = {
  amarillo: 'text-hilo-amarillo',
  verde: 'text-hilo-verde',
  azul: 'text-hilo-azul',
  naranja: 'text-hilo-naranja',
  rosa: 'text-hilo-rosa',
};
const fondos: Record<Hilo, string> = {
  amarillo: 'bg-hilo-amarillo',
  verde: 'bg-hilo-verde',
  azul: 'bg-hilo-azul',
  naranja: 'bg-hilo-naranja',
  rosa: 'bg-hilo-rosa',
};
</script>

<template>
  <section id="precios" class="px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Precios</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Una idea de precios para empezar
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Cada pieza es única, así que el precio final depende del tamaño, el detalle y la
          personalización. Estos son valores de arranque para orientarte.
        </p>
      </header>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(precio, i) in precios"
          :key="precio.id"
          data-reveal
          :style="{ '--reveal-delay': `${i * 70}ms` }"
        >
          <article class="flex h-full flex-col rounded-3xl bg-papel p-6 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]">
            <span :class="fondos[precio.hilo]" class="h-1.5 w-12 rounded-full" aria-hidden="true"></span>
            <h3 class="mt-5 font-display text-xl font-bold text-tinta">{{ precio.nombre }}</h3>
            <p class="mt-4 flex items-baseline gap-2">
              <span class="text-sm font-semibold text-tinta-suave">desde</span>
              <span :class="textos[precio.hilo]" class="font-display text-4xl font-black">
                {{ precio.desde }}
              </span>
            </p>
            <p class="mt-4 flex-1 text-sm leading-relaxed text-tinta-suave">{{ precio.nota }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-12 flex flex-col items-center gap-4 text-center" data-reveal>
        <p class="text-sm text-tinta-suave">
          ¿Buscas algo específico? Te doy el precio exacto según tu idea.
        </p>
        <BotonWhatsApp etiqueta="Pedir una cotización" mensaje="¡Hola Salo! Me gustaría cotizar un tejido personalizado." />
      </div>
    </div>
  </section>
</template>
