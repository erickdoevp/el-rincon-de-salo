<script setup lang="ts">
import { tejidos } from '../composables/useContenido';
import BotonWhatsApp from './BotonWhatsApp.vue';
</script>

<template>
  <section id="tejidos" class="px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end" data-reveal>
        <div class="max-w-2xl">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Galería</p>
          <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
            Tejidos que ya encontraron dueño
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
            Una muestra de piezas hechas a pedido. La tuya puede ser la siguiente.
          </p>
        </div>
        <BotonWhatsApp
          variante="contorno"
          etiqueta="Encargar algo así"
          mensaje="¡Hola Salo! Vi tu galería y quiero encargar una pieza. ¿Me pasas más información?"
          class="shrink-0"
        />
      </header>

      <!-- Mosaico: algunas piezas ocupan doble alto -->
      <ul
        class="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[13rem] lg:grid-cols-4"
      >
        <li
          v-for="(tejido, i) in tejidos"
          :key="tejido.id"
          data-reveal
          :style="{ '--reveal-delay': `${(i % 4) * 70}ms` }"
          :class="tejido.alto ? 'row-span-2' : ''"
          class="group relative overflow-hidden rounded-2xl bg-papel"
        >
          <NuxtImg
            :src="tejido.imagen"
            :alt="tejido.alt"
            width="480"
            height="480"
            format="webp"
            sizes="xs:45vw md:45vw lg:270px"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <div class="rounded-xl bg-tinta/85 px-3 py-2 backdrop-blur-sm">
              <h3 class="font-display text-sm font-semibold text-crema">{{ tejido.titulo }}</h3>
              <p class="mt-0.5 text-xs leading-snug text-crema/80">{{ tejido.descripcion }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
