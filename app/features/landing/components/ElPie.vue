<script setup lang="ts">
import { contacto, enlacesNav } from '../composables/useContenido';

const anio = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-crema-hondo bg-crema px-5 py-12">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-3">
        <NuxtImg
          src="/images/logo.jpg"
          alt="Logo de El Rincón de Salo"
          width="52"
          height="52"
          format="webp"
          loading="lazy"
          class="h-12 w-12 rounded-full bg-papel object-contain"
        />
        <div>
          <p class="font-display text-lg font-semibold text-magenta">El Rincón de Salo</p>
          <p class="font-script text-base text-tinta-suave">Hecho a mano, hecho con amor</p>
        </div>
      </div>

      <nav aria-label="Enlaces del pie">
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li v-for="enlace in enlacesNav" :key="enlace.ancla">
            <a :href="enlace.ancla" class="text-sm font-semibold text-tinta-suave transition-colors hover:text-magenta">
              {{ enlace.etiqueta }}
            </a>
          </li>
          <li>
            <a
              :href="contacto.instagramUrl"
              target="_blank"
              rel="noopener"
              class="text-sm font-semibold text-tinta-suave transition-colors hover:text-magenta"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              :href="`mailto:${contacto.correo}`"
              class="text-sm font-semibold text-tinta-suave transition-colors hover:text-magenta"
            >
              Correo
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="mx-auto mt-8 max-w-6xl text-sm text-tinta-suave">
      © {{ anio }} El Rincón de Salo · Tejidos a crochet hechos a mano.
    </p>
  </footer>
</template>
