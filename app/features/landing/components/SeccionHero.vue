<script setup lang="ts">
import BotonWhatsApp from './BotonWhatsApp.vue';
</script>

<template>
  <section id="inicio" class="relative overflow-hidden px-5 pb-16 pt-28 sm:pt-32 lg:pb-24">
    <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
      <!-- Tesis: el eslogan como protagonista -->
      <div data-reveal>
        <p class="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-magenta">
          <span class="inline-block h-3 w-3 rounded-full bg-hilo-amarillo"></span>
          Tejido a crochet · Piezas únicas
        </p>

        <h1 class="mt-5 font-display text-5xl font-black leading-[0.95] text-tinta sm:text-6xl lg:text-7xl">
          Tejidos que se
          <span class="text-magenta">guardan para siempre</span>
        </h1>

        <p class="mt-4 font-script text-3xl text-tinta-suave sm:text-4xl">Hecho a mano, hecho con amor</p>

        <p class="mt-6 max-w-lg text-lg leading-relaxed text-tinta-suave">
          En El Rincón de Salo cada punto lleva tiempo, paciencia y cariño. Amigurumis
          personalizados, ramos de graduación que no se marchitan y detalles pensados para
          regalar momentos, no solo objetos.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <BotonWhatsApp etiqueta="Pedir mi tejido" />
          <a
            href="#tejidos"
            class="inline-flex items-center gap-2 rounded-full border-2 border-tinta/15 px-6 py-3 text-base font-bold text-tinta transition-colors hover:border-magenta hover:text-magenta"
          >
            Ver los tejidos
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <dl class="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <div>
            <dt class="text-sm text-tinta-suave">Cada pieza es</dt>
            <dd class="font-display text-lg font-semibold text-tinta">Única e irrepetible</dd>
          </div>
          <div>
            <dt class="text-sm text-tinta-suave">Hacemos</dt>
            <dd class="font-display text-lg font-semibold text-tinta">Pedidos personalizados</dd>
          </div>
          <div>
            <dt class="text-sm text-tinta-suave">Llega con</dt>
            <dd class="font-display text-lg font-semibold text-tinta">Envíos a todo México</dd>
          </div>
        </dl>
      </div>

      <!-- Collage de piezas reales en marcos de puntada -->
      <div data-reveal style="--reveal-delay: 120ms" class="relative mx-auto w-full max-w-md lg:max-w-none">
        <figure class="hero-flota relative z-20 ml-auto w-3/4 rotate-2 rounded-[1.75rem] bg-papel p-2 shadow-[0_24px_50px_-24px_rgba(42,38,34,0.5)]">
          <NuxtImg
            src="/images/tejidos/ramo-graduacion-color.jpeg"
            alt="Muñeca graduada con toga y un ramo de flores tejidas a crochet"
            class="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            width="640"
            height="800"
            format="webp"
            sizes="xs:70vw md:70vw lg:460px"
            preload
            loading="eager"
            fetchpriority="high"
          />
        </figure>

        <figure class="hero-flota hero-flota--lento absolute -left-2 top-16 z-30 w-1/2 -rotate-3 rounded-[1.5rem] bg-papel p-2 shadow-[0_24px_50px_-24px_rgba(42,38,34,0.5)] sm:top-24">
          <NuxtImg
            src="/images/tejidos/llaveros-virgen.jpeg"
            alt="Tres llaveros miniatura de la Virgen tejidos a crochet"
            class="aspect-square w-full rounded-[1.15rem] object-cover"
            width="360"
            height="360"
            format="webp"
            sizes="xs:45vw md:45vw lg:300px"
            loading="eager"
          />
        </figure>

        <figure class="hero-flota absolute -bottom-4 left-4 z-10 w-2/5 rotate-1 rounded-[1.25rem] bg-papel p-2 shadow-[0_18px_40px_-22px_rgba(42,38,34,0.5)]">
          <NuxtImg
            src="/images/tejidos/hongos.jpeg"
            alt="Hongos decorativos tejidos a crochet en muchos colores"
            class="aspect-square w-full rounded-[0.95rem] object-cover"
            width="300"
            height="300"
            format="webp"
            sizes="xs:40vw md:40vw lg:240px"
            loading="lazy"
          />
        </figure>

        <!-- Madeja decorativa -->
        <span
          class="absolute -right-3 top-2 z-0 hidden h-16 w-16 rounded-full bg-hilo-azul/25 sm:block"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-flota {
  animation: flota 7s ease-in-out infinite;
}
.hero-flota--lento {
  animation-duration: 9s;
  animation-delay: -2s;
}
@keyframes flota {
  0%,
  100% {
    transform: translateY(0) var(--r, rotate(0));
  }
  50% {
    transform: translateY(-10px) var(--r, rotate(0));
  }
}
/* Conserva las rotaciones individuales combinándolas con la flotación */
.hero-flota.rotate-2 {
  --r: rotate(2deg);
}
.hero-flota.-rotate-3 {
  --r: rotate(-3deg);
}
.hero-flota.rotate-1 {
  --r: rotate(1deg);
}
@media (prefers-reduced-motion: reduce) {
  .hero-flota {
    animation: none;
  }
}
</style>
