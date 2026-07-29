<script setup lang="ts">
import { faqs } from '../composables/useContenido';
import BotonWhatsApp from './BotonWhatsApp.vue';
</script>

<template>
  <section id="preguntas" class="px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-3xl">
      <header class="text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Preguntas frecuentes</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Resolvamos tus dudas
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Lo que más me preguntan antes de encargar su tejido.
        </p>
      </header>

      <ul class="mt-12 flex flex-col gap-4">
        <li
          v-for="(faq, i) in faqs"
          :key="faq.id"
          data-reveal
          :style="{ '--reveal-delay': `${i * 60}ms` }"
        >
          <details class="group rounded-3xl bg-papel px-6 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]">
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-bold text-tinta [&::-webkit-details-marker]:hidden"
            >
              {{ faq.pregunta }}
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crema-hondo text-magenta transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p class="pb-6 text-base leading-relaxed text-tinta-suave">{{ faq.respuesta }}</p>
          </details>
        </li>
      </ul>

      <div class="mt-10 flex flex-col items-center gap-4 text-center" data-reveal>
        <p class="text-sm text-tinta-suave">¿Tienes otra pregunta? Con gusto te ayudo.</p>
        <BotonWhatsApp
          variante="contorno"
          etiqueta="Preguntar por WhatsApp"
          mensaje="¡Hola Salo! Tengo una pregunta sobre tus tejidos."
        />
      </div>
    </div>
  </section>
</template>
