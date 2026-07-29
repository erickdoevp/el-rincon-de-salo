<script setup lang="ts">
import { computed } from 'vue';
import type { Categoria, Hilo } from '../interfaces';

const props = defineProps<{ categoria: Categoria }>();

// Mapa de hilo -> clases utilitarias (evita clases dinámicas que Tailwind purga).
const fondos: Record<Hilo, string> = {
  amarillo: 'bg-hilo-amarillo',
  verde: 'bg-hilo-verde',
  azul: 'bg-hilo-azul',
  naranja: 'bg-hilo-naranja',
  rosa: 'bg-hilo-rosa',
};
const puntos = computed(() => fondos[props.categoria.hilo]);
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-3xl bg-papel shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)] transition-transform duration-300 hover:-translate-y-1.5"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <NuxtImg
        :src="categoria.imagen"
        :alt="categoria.alt"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="480"
        height="360"
        format="webp"
        sizes="xs:90vw sm:45vw md:45vw lg:360px"
        loading="lazy"
      />
      <span :class="puntos" class="absolute left-4 top-4 h-3 w-3 rounded-full ring-4 ring-papel"></span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-display text-xl font-bold text-tinta">{{ categoria.nombre }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-tinta-suave">{{ categoria.descripcion }}</p>
      <span :class="puntos" class="mt-5 h-1.5 w-12 rounded-full"></span>
    </div>
  </article>
</template>
