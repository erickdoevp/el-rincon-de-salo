<script setup lang="ts">
import { pasos } from '../composables/useContenido';
import BotonWhatsApp from './BotonWhatsApp.vue';
</script>

<template>
  <section id="como-pedir" class="bg-tinta px-5 py-16 text-crema lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-hilo-amarillo">Cómo pedir</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
          De tu idea a tus manos en cuatro pasos
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-crema/70">
          Todo empieza con un mensaje. Así trabajamos tu pedido personalizado.
        </p>
      </header>

      <ol class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(paso, i) in pasos"
          :key="paso.numero"
          class="relative"
          data-reveal
          :style="{ '--reveal-delay': `${i * 90}ms` }"
        >
          <span
            class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-hilo-amarillo font-display text-2xl font-black text-hilo-amarillo"
          >
            {{ paso.numero }}
          </span>
          <h3 class="mt-5 font-display text-xl font-bold">{{ paso.titulo }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-crema/70">{{ paso.descripcion }}</p>
        </li>
      </ol>

      <div class="mt-14 flex justify-center" data-reveal>
        <BotonWhatsApp etiqueta="Empezar mi pedido" />
      </div>
    </div>
  </section>
</template>
