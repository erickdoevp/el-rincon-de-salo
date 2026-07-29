<script setup lang="ts">
import { categorias } from '../composables/useContenido';
import CategoriaTarjeta from './CategoriaTarjeta.vue';
</script>

<template>
  <section id="categorias" class="bg-crema-hondo/60 px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Qué tejemos</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Un hilo para cada ocasión
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Estas son las piezas que más piden. ¿No ves lo que buscas? Se puede tejer casi
          cualquier idea a tu gusto.
        </p>
      </header>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(categoria, i) in categorias"
          :key="categoria.id"
          data-reveal
          :style="{ '--reveal-delay': `${i * 80}ms` }"
        >
          <CategoriaTarjeta :categoria="categoria" />
        </li>
      </ul>
    </div>
  </section>
</template>
