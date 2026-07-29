import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  /**
   * Fuentes autoalojadas: se descargan en el build y se sirven desde nuestro
   * dominio, en vez de bloquear el render con una hoja de estilo de Google.
   * Se declaran solo los pesos que la landing usa de verdad (400/600/700/900,
   * sin itálicas), porque cada corte extra es una descarga más.
   */
  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    families: [
      // Fraunces y Nunito Sans son variables: los pesos declarados comparten
      // el mismo archivo, así que listarlos no añade descargas.
      { name: 'Fraunces', provider: 'google', weights: [400, 600, 700, 900] },
      { name: 'Nunito Sans', provider: 'google', weights: [400, 600, 700] },
      // Parisienne solo existe en 400: pedir otros pesos generaría falsos.
      { name: 'Parisienne', provider: 'google', weights: [400] },
    ],
  },
  /**
   * URL pública del sitio: la usan el canonical, las etiquetas Open Graph,
   * el sitemap y el robots.txt. En el hosting se puede sobrescribir con la
   * variable de entorno NUXT_PUBLIC_SITE_URL (útil para entornos de prueba,
   * donde conviene que el canonical no apunte al dominio real).
   */
  site: {
    url: 'https://elrincondesalo.com',
    name: 'El Rincón de Salo',
  },
  sitemap: {
    // Landing de una sola URL: sin índice partido ni entradas huérfanas.
    autoI18n: false,
    exclude: ['/_ipx/**'],
  },
  robots: {
    disallow: ['/_ipx/'],
  },
  image: {
    // Optimización local con IPX (sharp). Formatos modernos y calidad alta.
    format: ['avif', 'webp'],
    quality: 72,
    // Puntos de quiebre usados por los `sizes` responsivos.
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es-MX' },
      // Título, descripción y Open Graph viven en la página, que es donde se
      // pueden construir las URL absolutas que exigen las redes sociales.
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#fbf7f0' },
      ],
      // Las fuentes ya no se enlazan aquí: las autoaloja @nuxt/fonts, así que
      // sobran los `preconnect` a Google y la hoja de estilo bloqueante.
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.jpg' },
      ],
    },
  },
});
