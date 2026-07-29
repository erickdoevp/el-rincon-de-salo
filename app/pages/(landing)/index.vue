<script setup lang="ts">
import LandingPage from '~/features/landing/pages/LandingPage.vue';
import { faqs } from '~/features/landing/composables/useContenido';
import {
  datosEstructuradosNegocio,
  negocio,
  seoDescripcion,
  seoImagenAlt,
  seoImagenOrigen,
  seoTitulo,
} from '~/features/landing/composables/useSeo';

const img = useImage();
const urlSitio = useSiteConfig().url.replace(/\/$/, '');

/**
 * Vista previa para WhatsApp, Facebook e Instagram: 1200x630 (1.91:1), que es
 * la proporción a la que recortan todas ellas.
 *
 * Usamos `contain` sobre el crema de la marca en vez de `cover` porque la foto
 * original es vertical: recortarla dejaba fuera la cabeza de la muñeca. Así se
 * ve la pieza completa y las bandas laterales quedan del color del sitio.
 *
 * `enlarge` hace falta porque el original mide 1097px de ancho e IPX no amplía
 * por defecto: sin esto la imagen saldría a 1097x576.
 */
const urlImagenOg =
  urlSitio +
  img(seoImagenOrigen, {
    width: 1200,
    height: 630,
    fit: 'contain',
    // Sin `#`: al prerenderizar, Nitro decodifica el %23 y trunca la URL en
    // ese punto como si fuera un fragmento. El hex pelado da el mismo color.
    background: 'fbf7f0',
    enlarge: true,
    format: 'jpeg',
    quality: 80,
  });

useSeoMeta({
  title: seoTitulo,
  description: seoDescripcion,
  ogTitle: seoTitulo,
  ogDescription: seoDescripcion,
  ogType: 'website',
  ogLocale: 'es_MX',
  ogSiteName: negocio.nombre,
  ogUrl: urlSitio,
  ogImage: urlImagenOg,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: seoImagenAlt,
  twitterCard: 'summary_large_image',
  twitterTitle: seoTitulo,
  twitterDescription: seoDescripcion,
  twitterImage: urlImagenOg,
  twitterImageAlt: seoImagenAlt,
});

useHead({
  link: [{ rel: 'canonical', href: urlSitio }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(datosEstructuradosNegocio(urlSitio, urlImagenOg)),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.respuesta,
          },
        })),
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: negocio.nombre,
        url: urlSitio,
        inLanguage: 'es-MX',
        publisher: { '@id': `${urlSitio}/#negocio` },
      }),
    },
  ],
});
</script>

<template>
  <LandingPage />
</template>
