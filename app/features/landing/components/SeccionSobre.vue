<script setup lang="ts">
const valores = [
  {
    titulo: 'Punto por punto',
    texto: 'Sin máquinas ni prisas. Cada tejido se hace a mano, con el tiempo que merece.',
    hilo: 'bg-hilo-verde',
  },
  {
    titulo: 'A tu medida',
    texto: 'Colores, tamaños y detalles se eligen contigo para que la pieza sea tuya de verdad.',
    hilo: 'bg-hilo-rosa',
  },
  {
    titulo: 'Para regalar',
    texto: 'Graduaciones, bautizos, cumpleaños o un “porque sí”: un detalle que se queda.',
    hilo: 'bg-hilo-azul',
  },
];
</script>

<template>
  <section class="px-5 py-16 lg:py-24">
    <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
      <div data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">El rincón</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Un pequeño taller donde el hilo se vuelve recuerdo
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-tinta-suave">
          El Rincón de Salo nació del gusto por tejer y por ver la cara de quien recibe algo
          hecho especialmente para él. Aquí no encontrarás dos piezas iguales: cada amigurumi,
          cada ramo y cada llavero se teje a ganchillo, cuidando los detalles que hacen sonreír.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Si tienes una idea en mente, es muy probable que podamos tejerla juntas.
        </p>

        <ul class="mt-8 grid gap-5 sm:grid-cols-3">
          <li v-for="valor in valores" :key="valor.titulo">
            <span :class="valor.hilo" class="mb-3 block h-2.5 w-10 rounded-full"></span>
            <h3 class="font-display text-lg font-semibold text-tinta">{{ valor.titulo }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-tinta-suave">{{ valor.texto }}</p>
          </li>
        </ul>
      </div>

      <!-- Retrato del producto: el tapete de margaritas, con marco de puntada -->
      <figure data-reveal style="--reveal-delay: 120ms" class="relative mx-auto max-w-md">
        <div class="puntada rounded-[2rem] p-3">
          <NuxtImg
            src="/images/tejidos/tapete-margaritas.jpeg"
            alt="Tapete circular blanco rematado con margaritas, tejido a crochet sobre el pasto"
            class="aspect-square w-full rounded-[1.6rem] object-cover"
            width="640"
            height="640"
            format="webp"
            sizes="xs:90vw sm:448px"
            loading="lazy"
          />
        </div>
        <figcaption
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-magenta px-5 py-2 font-script text-xl text-crema shadow-lg"
        >
          Hecho con amor
        </figcaption>
      </figure>
    </div>
  </section>
</template>
