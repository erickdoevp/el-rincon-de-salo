<script setup lang="ts">
import { computed } from 'vue';
import { enlaceWhatsApp } from '../composables/useContenido';

const props = withDefaults(
  defineProps<{
    /** Texto visible del botón. */
    etiqueta?: string;
    /** Mensaje prellenado en WhatsApp. */
    mensaje?: string;
    /** Estilo: sólido (magenta) o contorno. */
    variante?: 'solido' | 'contorno';
  }>(),
  {
    etiqueta: 'Pedir por WhatsApp',
    mensaje: '¡Hola Salo! Vi tu página y me encantaría pedir un tejido. ¿Me ayudas?',
    variante: 'solido',
  },
);

const href = computed(() => enlaceWhatsApp(props.mensaje));
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold tracking-tight transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
    :class="
      variante === 'solido'
        ? 'bg-magenta text-crema shadow-[0_10px_24px_-10px_rgba(156,45,112,0.7)] hover:bg-magenta-hondo'
        : 'border-2 border-magenta bg-transparent text-magenta hover:bg-magenta hover:text-crema'
    "
  >
    <!-- Ícono de WhatsApp -->
    <svg
      class="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 01-1.44-5.01c0-5.2 4.24-9.43 9.46-9.43a9.4 9.4 0 016.68 2.77 9.36 9.36 0 012.76 6.67c0 5.2-4.24 9.43-9.43 9.43zm8.03-17.46A11.28 11.28 0 0012.05.9C5.83.9.77 5.95.77 12.16c0 1.99.52 3.93 1.51 5.64L.68 23.6l5.94-1.56a11.3 11.3 0 005.42 1.38h.01c6.22 0 11.28-5.05 11.28-11.26 0-3.01-1.17-5.84-3.3-7.97z"
      />
    </svg>
    <span>{{ etiqueta }}</span>
  </a>
</template>
