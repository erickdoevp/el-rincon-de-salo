<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { enlacesNav } from '../composables/useContenido';
import BotonWhatsApp from './BotonWhatsApp.vue';

const menuAbierto = ref(false);
const compacto = ref(false);

function alScroll() {
  compacto.value = window.scrollY > 12;
}

function cerrarMenu() {
  menuAbierto.value = false;
}

onMounted(() => window.addEventListener('scroll', alScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('scroll', alScroll));
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="compacto ? 'bg-crema/90 shadow-[0_1px_0_rgba(42,38,34,0.08)] backdrop-blur' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
      <!-- Marca -->
      <a href="#inicio" class="flex items-center gap-3" aria-label="El Rincón de Salo, inicio">
        <NuxtImg
          src="/images/logo.jpg"
          alt="Logo de El Rincón de Salo: madejas de lana de colores"
          width="48"
          height="48"
          format="webp"
          class="h-11 w-11 rounded-full bg-papel object-contain"
        />
        <span class="hidden leading-tight sm:block">
          <span class="block font-display text-lg font-semibold text-magenta">El Rincón de Salo</span>
          <span class="block font-script text-sm text-tinta-suave">Hecho a mano, hecho con amor</span>
        </span>
      </a>

      <!-- Navegación de escritorio -->
      <nav class="hidden items-center gap-x-4 lg:flex lg:gap-x-6" aria-label="Navegación principal">
        <a
          v-for="enlace in enlacesNav"
          :key="enlace.ancla"
          :href="enlace.ancla"
          class="text-sm font-semibold text-tinta transition-colors hover:text-magenta"
        >
          {{ enlace.etiqueta }}
        </a>
        <BotonWhatsApp etiqueta="Hacer un pedido" class="!px-5 !py-2 !text-sm" />
      </nav>

      <!-- Botón de menú móvil -->
      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-full text-tinta lg:hidden"
        :aria-expanded="menuAbierto"
        aria-controls="menu-movil"
        @click="menuAbierto = !menuAbierto"
      >
        <span class="sr-only">{{ menuAbierto ? 'Cerrar menú' : 'Abrir menú' }}</span>
        <svg v-if="!menuAbierto" class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <nav
      v-show="menuAbierto"
      id="menu-movil"
      class="border-t border-crema-hondo bg-crema px-5 pb-6 pt-2 lg:hidden"
      aria-label="Navegación principal"
    >
      <ul class="flex flex-col">
        <li v-for="enlace in enlacesNav" :key="enlace.ancla">
          <a
            :href="enlace.ancla"
            class="block border-b border-crema-hondo py-3 font-display text-lg text-tinta"
            @click="cerrarMenu"
          >
            {{ enlace.etiqueta }}
          </a>
        </li>
      </ul>
      <BotonWhatsApp etiqueta="Hacer un pedido" class="mt-5 w-full" @click="cerrarMenu" />
    </nav>
  </header>
</template>
