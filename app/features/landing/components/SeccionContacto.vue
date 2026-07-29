<script setup lang="ts">
import { contacto } from '../composables/useContenido';
import BotonWhatsApp from './BotonWhatsApp.vue';
</script>

<template>
  <section id="contacto" class="px-5 py-16 lg:py-24">
    <div
      class="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-magenta px-6 py-14 text-center text-crema sm:px-12"
      data-reveal
    >
      <p class="font-script text-3xl sm:text-4xl">¿Tienes una idea en mente?</p>
      <h2 class="mx-auto mt-2 max-w-2xl font-display text-4xl font-black leading-tight sm:text-5xl">
        Tejámosla juntas
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-crema/85">
        Escríbeme por WhatsApp o Instagram y platícame qué imaginas. Con gusto te ayudo a
        convertirlo en un tejido único.
      </p>

      <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <BotonWhatsApp variante="contorno" etiqueta="Escribir por WhatsApp" class="!border-crema !text-crema hover:!bg-crema hover:!text-magenta" />
        <a
          :href="contacto.instagramUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-crema transition-colors hover:text-crema/80"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.86 2.86 0 00-.69-1.06 2.86 2.86 0 00-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1012 16.94 4.94 4.94 0 0012 7.06zm0 8.14A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm6.3-8.34a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
          </svg>
          @{{ contacto.instagramUsuario }}
        </a>
        <a
          :href="`mailto:${contacto.correo}`"
          class="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold text-crema transition-colors hover:text-crema/80"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          {{ contacto.correo }}
        </a>
      </div>

      <p class="mt-8 text-sm text-crema/70">{{ contacto.ubicacion }}</p>
    </div>
  </section>
</template>
