<script setup lang="ts">
import { antelacionNota, anticipoNota, metodosPago, tiemposEntrega } from '../composables/useContenido';
</script>

<template>
  <section id="pagos" class="bg-crema-hondo/60 px-5 py-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <header class="mx-auto max-w-2xl text-center" data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.2em] text-magenta">Tiempos y pagos</p>
        <h2 class="mt-3 font-display text-4xl font-black leading-tight text-tinta sm:text-5xl">
          Todo claro antes de empezar
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-tinta-suave">
          Estos son los tiempos de elaboración estimados y las formas en que puedes pagar tu
          pedido.
        </p>
      </header>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <!-- Tiempos de elaboración -->
        <article class="rounded-3xl bg-papel p-7 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]" data-reveal>
          <h3 class="font-display text-2xl font-bold text-tinta">Tiempos de elaboración</h3>
          <ul class="mt-6 flex flex-col gap-4">
            <li
              v-for="tiempo in tiemposEntrega"
              :key="tiempo.id"
              class="flex items-center justify-between gap-4 border-b border-crema-hondo pb-4 last:border-0 last:pb-0"
            >
              <span class="text-base text-tinta">{{ tiempo.tipo }}</span>
              <span class="shrink-0 rounded-full bg-crema-hondo px-4 py-1.5 font-display text-sm font-bold text-tinta">
                {{ tiempo.tiempo }}
              </span>
            </li>
          </ul>
          <p class="mt-6 flex items-start gap-3 rounded-2xl bg-crema-hondo px-5 py-4 text-sm leading-relaxed text-tinta">
            <svg class="mt-0.5 h-5 w-5 shrink-0 text-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span><span class="font-bold text-magenta">Anticipación:</span> {{ antelacionNota }}</span>
          </p>
          <p class="mt-4 text-sm leading-relaxed text-tinta-suave">
            En temporadas de mucha demanda (graduaciones, fechas especiales) te confirmo el tiempo
            exacto al hacer tu pedido.
          </p>
        </article>

        <!-- Formas de pago -->
        <article class="rounded-3xl bg-papel p-7 shadow-[0_18px_40px_-28px_rgba(42,38,34,0.55)]" data-reveal>
          <h3 class="font-display text-2xl font-bold text-tinta">Formas de pago</h3>
          <ul class="mt-6 flex flex-col gap-5">
            <li v-for="metodo in metodosPago" :key="metodo.id" class="flex items-start gap-3">
              <svg class="mt-0.5 h-6 w-6 shrink-0 text-magenta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>
                <span class="block font-display text-base font-bold text-tinta">{{ metodo.nombre }}</span>
                <span class="block text-sm leading-relaxed text-tinta-suave">{{ metodo.detalle }}</span>
              </span>
            </li>
          </ul>
          <p class="mt-6 rounded-2xl bg-crema-hondo px-5 py-4 text-sm leading-relaxed text-tinta">
            <span class="font-bold text-magenta">Anticipo:</span> {{ anticipoNota }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
