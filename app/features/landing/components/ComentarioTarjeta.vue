<script setup lang="ts">
import { computed } from 'vue';
import type { Comentario, Hilo } from '../interfaces';

const props = defineProps<{ comentario: Comentario }>();

// Mapa de hilo -> clases utilitarias (evita clases dinámicas que Tailwind purga).
const fondos: Record<Hilo, string> = {
  amarillo: 'bg-hilo-amarillo',
  verde: 'bg-hilo-verde',
  azul: 'bg-hilo-azul',
  naranja: 'bg-hilo-naranja',
  rosa: 'bg-hilo-rosa',
};
const acento = computed(() => fondos[props.comentario.hilo]);
const inicial = computed(() => props.comentario.nombre.charAt(0).toUpperCase());
</script>

<template>
  <figure
    class="flex h-full flex-col rounded-3xl bg-papel p-6 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]"
  >
    <div
      class="flex items-center gap-1 text-hilo-amarillo"
      role="img"
      :aria-label="`${comentario.estrellas} de 5 estrellas`"
    >
      <svg
        v-for="n in 5"
        :key="n"
        class="h-5 w-5"
        :class="n > comentario.estrellas ? 'text-crema-hondo' : ''"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M12 2.5l2.9 5.87 6.48.94-4.69 4.57 1.11 6.45L12 17.77l-5.8 3.05 1.1-6.45-4.68-4.57 6.48-.94L12 2.5z"
        />
      </svg>
    </div>

    <blockquote class="mt-4 flex-1 text-base leading-relaxed text-tinta">
      “{{ comentario.texto }}”
    </blockquote>

    <figcaption class="mt-6 flex items-center gap-3">
      <span
        :class="acento"
        class="flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-black text-papel"
        aria-hidden="true"
      >
        {{ inicial }}
      </span>
      <span class="leading-tight">
        <cite class="block font-display text-base font-bold not-italic text-tinta">
          {{ comentario.nombre }}
        </cite>
        <span class="block text-sm text-tinta-suave">{{ comentario.pieza }}</span>
      </span>
    </figcaption>
  </figure>
</template>
