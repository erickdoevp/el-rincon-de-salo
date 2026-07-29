<script setup lang="ts">
import { computed, useId } from 'vue';

/**
 * Elemento de firma: el borde ondulado (scallop) del remate de un tejido,
 * como el del tapete de margaritas. Dibujado en SVG puro — sin degradados.
 * Se usa como divisor entre secciones.
 */
const props = withDefaults(
  defineProps<{
    /** Color del borde (cualquier color CSS). */
    color?: string;
    /** Voltea las ondas para rematar el borde inferior de una sección. */
    invertido?: boolean;
  }>(),
  {
    color: 'var(--color-magenta)',
    invertido: false,
  },
);

const patronId = `onda-${useId()}`;
const transform = computed(() => (props.invertido ? 'scaleY(-1)' : undefined));
</script>

<template>
  <div class="pointer-events-none select-none leading-[0]" aria-hidden="true" :style="{ color }">
    <svg
      class="block w-full"
      :style="{ height: '28px', transform }"
      preserveAspectRatio="none"
      viewBox="0 0 1200 28"
      role="presentation"
    >
      <defs>
        <!-- Una onda tejida: banda sólida arriba, festón redondo abajo y un
             "picot" (agujerito) al centro, como el remate a ganchillo. -->
        <pattern :id="patronId" width="46" height="28" patternUnits="userSpaceOnUse">
          <path d="M0,0 H46 V9 Q23,26 0,9 Z" fill="currentColor" />
          <circle cx="23" cy="9" r="2.4" fill="var(--color-crema)" />
        </pattern>
      </defs>
      <rect width="1200" height="28" :fill="`url(#${patronId})`" />
    </svg>
  </div>
</template>
