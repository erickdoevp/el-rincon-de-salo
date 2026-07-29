<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal';
import BordeOndulado from '../components/BordeOndulado.vue';
import ElHeader from '../components/ElHeader.vue';
import SeccionHero from '../components/SeccionHero.vue';
import SeccionSobre from '../components/SeccionSobre.vue';
import SeccionCategorias from '../components/SeccionCategorias.vue';
import SeccionGaleria from '../components/SeccionGaleria.vue';
import SeccionPrecios from '../components/SeccionPrecios.vue';
import SeccionPagos from '../components/SeccionPagos.vue';
import SeccionComentarios from '../components/SeccionComentarios.vue';
import SeccionEntregas from '../components/SeccionEntregas.vue';
import SeccionProceso from '../components/SeccionProceso.vue';
import SeccionFaq from '../components/SeccionFaq.vue';
import SeccionContacto from '../components/SeccionContacto.vue';
import ElPie from '../components/ElPie.vue';

useScrollReveal();
</script>

<template>
  <div class="min-h-dvh bg-crema">
    <a
      href="#tejidos"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-magenta focus:px-5 focus:py-2 focus:font-bold focus:text-crema"
    >
      Saltar al contenido
    </a>

    <ElHeader />

    <main>
      <SeccionHero />

      <!-- Divisor de firma: el remate ondulado del tejido -->
      <BordeOndulado color="var(--color-hilo-rosa)" />

      <SeccionSobre />

      <SeccionCategorias />

      <SeccionGaleria />

      <SeccionPrecios />

      <SeccionPagos />

      <SeccionComentarios />

      <SeccionEntregas />

      <!-- Onda invertida que entra en la sección oscura -->
      <BordeOndulado color="var(--color-tinta)" invertido />

      <SeccionProceso />

      <SeccionFaq />

      <SeccionContacto />
    </main>

    <ElPie />
  </div>
</template>
