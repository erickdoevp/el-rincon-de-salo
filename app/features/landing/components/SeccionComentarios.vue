<script setup lang="ts">
import { comentarios } from '../composables/useContenido';
import ComentarioTarjeta from './ComentarioTarjeta.vue';
</script>

<template>
  <section id="opiniones" class="px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Opiniones</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Lo que dicen quienes ya recibieron su tejido
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Cada pieza se teje pensando en la persona que la va a recibir. Estas son algunas de sus
          experiencias.
        </p>
      </header>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(comentario, i) in comentarios"
          :key="comentario.id"
          data-reveal
          :style="{ '--reveal-delay': `${i * 80}ms` }"
        >
          <ComentarioTarjeta :comentario="comentario" />
        </li>
      </ul>
    </div>
  </section>
</template>
