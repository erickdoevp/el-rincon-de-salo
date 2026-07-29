/**
 * Datos de SEO en un solo lugar: negocio, ubicación y textos de metadatos.
 *
 * La URL del sitio se define en `nuxt.config.ts` (campo `site.url`) o con la
 * variable de entorno `NUXT_PUBLIC_SITE_URL`.
 */

import { contacto } from './useContenido';

export const negocio = {
  nombre: 'El Rincón de Salo',
  eslogan: 'Hecho a mano, hecho con amor',
  // Tlaxcala es a la vez la ciudad capital y el estado.
  ciudad: 'Tlaxcala',
  estado: 'Tlaxcala',
  pais: 'México',
  codigoPais: 'MX',
} as const;

/**
 * Zona de entrega en persona, para textos y datos estructurados.
 * Evita el "Tlaxcala, Tlaxcala" cuando ciudad y estado coinciden.
 */
export const zonaLocal =
  negocio.ciudad === negocio.estado
    ? negocio.ciudad
    : `${negocio.ciudad}, ${negocio.estado}`;

/**
 * Título de 49 caracteres: por debajo del límite en que Google recorta (~60)
 * y con la palabra clave al inicio, antes que la marca.
 */
export const seoTitulo = `Tejidos a crochet en ${zonaLocal} · ${negocio.nombre}`;

/** Descripción de 139 caracteres, dentro del corte de Google (~160). */
export const seoDescripcion = `Amigurumis personalizados, ramos de graduación, figuras religiosas y decoración a crochet, hechos a mano en ${zonaLocal}. Envíos a todo México.`;

/** Descripción larga para los datos estructurados, que no tienen límite. */
export const seoDescripcionLarga = `Tejidos a crochet hechos a mano en ${zonaLocal}. Amigurumis personalizados, ramos de graduación, figuras religiosas, llaveros y decoración. Entrega en persona en la zona y envíos a todo México.`;

/**
 * Imagen para compartir en WhatsApp, Facebook e Instagram.
 * Se recorta a 1200x630 (proporción 1.91:1) porque las vistas previas
 * recortan cualquier otra proporción de forma impredecible.
 */
export const seoImagenOrigen = '/images/tejidos/ramo-graduacion-color.jpeg';
export const seoImagenAlt =
  'Ramo de graduación tejido a crochet por El Rincón de Salo';

/** Datos estructurados del negocio para Google (schema.org). */
export function datosEstructuradosNegocio(urlSitio: string, urlImagen: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${urlSitio}/#negocio`,
    name: negocio.nombre,
    description: seoDescripcionLarga,
    slogan: negocio.eslogan,
    url: urlSitio,
    image: urlImagen,
    logo: `${urlSitio}/images/logo.jpg`,
    email: contacto.correo,
    telephone: `+${contacto.whatsapp}`,
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Efectivo, Transferencia bancaria',
    sameAs: [contacto.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      addressLocality: negocio.ciudad,
      addressRegion: negocio.estado,
      addressCountry: negocio.codigoPais,
    },
    areaServed: [
      { '@type': 'City', name: negocio.ciudad },
      { '@type': 'Country', name: negocio.pais },
    ],
    makesOffer: [
      'Amigurumis personalizados',
      'Ramos de graduación',
      'Figuras religiosas',
      'Llaveros y miniaturas',
      'Decoración y hogar',
      'Suéteres y prendas',
    ].map((nombre) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: nombre,
        category: 'Tejido a crochet hecho a mano',
      },
      availability: 'https://schema.org/InStock',
      priceCurrency: 'MXN',
    })),
  };
}
