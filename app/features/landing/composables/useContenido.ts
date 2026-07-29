import type {
  Categoria,
  Comentario,
  Contacto,
  EnlaceNav,
  LugarEntrega,
  MetodoPago,
  Paso,
  PrecioItem,
  PreguntaFrecuente,
  Tejido,
  TiempoEstimado,
} from '../interfaces';

/**
 * Contenido de la landing en un solo lugar. Cuando el emprendimiento crezca,
 * estos datos pueden migrar a un CMS o a la base de datos sin tocar los
 * componentes de presentación.
 *
 * Datos de contacto reales de El Rincón de Salo.
 */

export const contacto: Contacto = {
  whatsapp: '522461091086', // MX 246 109 1086 (lada país 52 + número)
  instagramUsuario: 'rincon.de.salo',
  instagramUrl: 'https://www.instagram.com/rincon.de.salo/',
  correo: 'padillasanchez93@gmail.com',
  ubicacion: 'Tlaxcala · Envíos a todo México',
};

/** Arma el enlace de WhatsApp con un mensaje prellenado. */
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlacesNav: EnlaceNav[] = [
  { etiqueta: 'Tejidos', ancla: '#tejidos' },
  { etiqueta: 'Categorías', ancla: '#categorias' },
  { etiqueta: 'Precios', ancla: '#precios' },
  { etiqueta: 'Opiniones', ancla: '#opiniones' },
  { etiqueta: 'Entregas', ancla: '#entregas' },
  { etiqueta: 'Preguntas', ancla: '#preguntas' },
  { etiqueta: 'Cómo pedir', ancla: '#como-pedir' },
  { etiqueta: 'Contacto', ancla: '#contacto' },
];

export const categorias: Categoria[] = [
  {
    id: 'amigurumis',
    nombre: 'Amigurumis personalizados',
    descripcion:
      'Muñecos con tu rostro, tu profesión o tu personaje favorito. Cada detalle se teje pensando en ti.',
    hilo: 'azul',
    imagen: '/images/tejidos/muneca-reina.jpeg',
    alt: 'Muñeca amigurumi de una reina con vestido verde y azul tejida a crochet',
  },
  {
    id: 'graduacion',
    nombre: 'Ramos de graduación',
    descripcion:
      'Un ramo que no se marchita: muñeca graduada con toga, birrete y flores tejidas para ese gran día.',
    hilo: 'rosa',
    imagen: '/images/tejidos/ramo-graduacion-rosa.jpeg',
    alt: 'Ramo de graduación con muñeca de toga rosa y flores tejidas a crochet',
  },
  {
    id: 'religiosas',
    nombre: 'Figuras religiosas',
    descripcion:
      'Vírgenes y santos hechos con devoción. Un regalo entrañable para acompañar la fe de quien lo recibe.',
    hilo: 'verde',
    imagen: '/images/tejidos/virgen-botitas.jpeg',
    alt: 'Par de figuras de la Virgen de Guadalupe tejidas a crochet en verde y rojo',
  },
  {
    id: 'llaveros',
    nombre: 'Llaveros y miniaturas',
    descripcion:
      'Pequeños tesoros para llevar a todas partes. Ideales como recuerdo o detalle para tus invitados.',
    hilo: 'amarillo',
    imagen: '/images/tejidos/llaveros-virgen.jpeg',
    alt: 'Tres llaveros miniatura de la Virgen tejidos a crochet en rosa, lila y verde',
  },
  {
    id: 'decoracion',
    nombre: 'Decoración y hogar',
    descripcion:
      'Tapetes, hongos y piezas que dan calidez a cada rincón de tu casa con hilo y paciencia.',
    hilo: 'naranja',
    imagen: '/images/tejidos/tapete-margaritas.jpeg',
    alt: 'Tapete circular blanco con borde de margaritas tejido a crochet sobre el pasto',
  },
  {
    id: 'prendas',
    nombre: 'Suéteres y prendas',
    descripcion:
      'Cardigans y prendas tejidas a mano, con diseños únicos y tu talla. Abrigo con estilo hecho solo para ti.',
    hilo: 'azul',
    imagen: '/images/tejidos/sueter-patchwork-azul.jpeg',
    alt: 'Suéter tipo cardigan tejido a crochet con cuadros en tonos azul y blanco',
  },
];

export const tejidos: Tejido[] = [
  {
    id: 'ramo-color',
    titulo: 'Ramo de graduación',
    descripcion: 'Muñeca graduada con toga y ramo de flores tejidas.',
    imagen: '/images/tejidos/ramo-graduacion-color.jpeg',
    alt: 'Muñeca graduada con toga negra sosteniendo un ramo de flores tejidas de colores',
    alto: true,
  },
  {
    id: 'tapete',
    titulo: 'Tapete de margaritas',
    descripcion: 'Tapete circular rematado con flores blancas.',
    imagen: '/images/tejidos/tapete-margaritas.jpeg',
    alt: 'Tapete circular blanco con borde de margaritas tejido a crochet',
  },
  {
    id: 'hongos',
    titulo: 'Hongos de colores',
    descripcion: 'Colección de hongos decorativos en toda la paleta.',
    imagen: '/images/tejidos/hongos.jpeg',
    alt: 'Conjunto de hongos tejidos a crochet en muchos colores sobre una mesa de madera',
  },
  {
    id: 'reina',
    titulo: 'Muñeca reina',
    descripcion: 'Amigurumi con corona, capa y vestido de dos tonos.',
    imagen: '/images/tejidos/muneca-reina.jpeg',
    alt: 'Muñeca amigurumi de una reina con corona y capa verde tejida a crochet',
    alto: true,
  },
  {
    id: 'llaveros',
    titulo: 'Llaveros de la Virgen',
    descripcion: 'Miniaturas devocionales para llevar contigo.',
    imagen: '/images/tejidos/llaveros-virgen.jpeg',
    alt: 'Tres llaveros miniatura de la Virgen tejidos a crochet',
  },
  {
    id: 'soldado',
    titulo: 'Soldado del Ejército',
    descripcion: 'Amigurumi personalizado con uniforme al detalle.',
    imagen: '/images/tejidos/soldado.jpeg',
    alt: 'Muñeco amigurumi de un soldado del Ejército Mexicano tejido a crochet',
  },
  {
    id: 'ramo-rosa',
    titulo: 'Graduada en rosa',
    descripcion: 'Ramo con birrete rosa y toga a juego.',
    imagen: '/images/tejidos/ramo-graduacion-rosa.jpeg',
    alt: 'Muñeca graduada con birrete y toga rosa dentro de un ramo tejido a crochet',
    alto: true,
  },
  {
    id: 'virgen',
    titulo: 'Virgen de Guadalupe',
    descripcion: 'Figura devocional en verde y dorado.',
    imagen: '/images/tejidos/virgen-botitas.jpeg',
    alt: 'Figura de la Virgen de Guadalupe tejida a crochet en verde y dorado',
  },
  {
    id: 'graduado',
    titulo: 'Graduado en toga blanca',
    descripcion: 'Amigurumi de graduación con birrete y borla.',
    imagen: '/images/tejidos/graduacion-nino.jpeg',
    alt: 'Muñeco amigurumi de un niño graduado con toga blanca y birrete tejido a crochet',
  },
  {
    id: 'ramo-azul',
    titulo: 'Graduada en azul',
    descripcion: 'Muñeca con toga oscura y estola azul.',
    imagen: '/images/tejidos/ramo-graduacion-azul.jpeg',
    alt: 'Muñeca graduada con toga oscura y estola azul dentro de un ramo tejido a crochet',
  },
  {
    id: 'sueter-azul',
    titulo: 'Cardigan de cuadros',
    descripcion: 'Suéter tejido a mano con patchwork en tonos azules.',
    imagen: '/images/tejidos/sueter-patchwork-azul.jpeg',
    alt: 'Suéter tipo cardigan tejido a crochet con cuadros en tonos azul y blanco',
    alto: true,
  },
  {
    id: 'ansiedad',
    titulo: 'Amigurumi de personaje',
    descripcion: 'Muñeco personalizado con cabello alborotado y muchísimo detalle.',
    imagen: '/images/tejidos/amigurumi-ansiedad.jpeg',
    alt: 'Amigurumi de un personaje naranja de cabello alborotado con pantalón café tejido a crochet',
  },
  {
    id: 'dino',
    titulo: 'Dinosaurio de peluche',
    descripcion: 'Dino verde menta con placas naranjas, suave para abrazar.',
    imagen: '/images/tejidos/dino-menta.jpeg',
    alt: 'Dinosaurio amigurumi verde menta con placas naranjas en el lomo tejido a crochet',
  },
];

export const pasos: Paso[] = [
  {
    numero: 1,
    titulo: 'Cuéntame tu idea',
    descripcion:
      'Escríbeme por WhatsApp con lo que imaginas: una persona, una fecha especial, colores o un personaje.',
  },
  {
    numero: 2,
    titulo: 'Diseñamos juntas',
    descripcion:
      'Acordamos tamaño, detalles y precio. Te comparto una propuesta y ajustamos hasta que te enamore.',
  },
  {
    numero: 3,
    titulo: 'Lo tejo a mano',
    descripcion:
      'Reservo tu lugar y empiezo a tejer punto por punto. Te mantengo al tanto del avance de tu pieza.',
  },
  {
    numero: 4,
    titulo: 'Llega a tus manos',
    descripcion: 'Empaco tu tejido con cariño y lo envío o lo entrego listo para regalar o presumir.',
  },
];

/**
 * Testimonios de muestra (datos generales de ejemplo).
 * ⚠️ Reemplazar con opiniones reales de clientas cuando estén disponibles.
 */
export const comentarios: Comentario[] = [
  {
    id: 'com-1',
    nombre: 'María Fernanda',
    pieza: 'Ramo de graduación',
    texto:
      '¡Quedó hermoso! Mi ramo de graduación llegó tal como lo imaginé, con muchísimo detalle. Todos me preguntaron dónde lo mandé a hacer.',
    estrellas: 5,
    hilo: 'rosa',
  },
  {
    id: 'com-2',
    nombre: 'Guadalupe R.',
    pieza: 'Virgen de Guadalupe',
    texto:
      'La figura de la Virgen es preciosa y se nota el amor con que la teje. Un regalo perfecto para mi mamá, la recibió con lágrimas.',
    estrellas: 5,
    hilo: 'verde',
  },
  {
    id: 'com-3',
    nombre: 'Karla Méndez',
    pieza: 'Amigurumi personalizado',
    texto:
      'Pedí un muñeco personalizado y superó mis expectativas. Muy buena comunicación durante todo el proceso y entrega puntual.',
    estrellas: 5,
    hilo: 'azul',
  },
  {
    id: 'com-4',
    nombre: 'Diana L.',
    pieza: 'Llaveros para evento',
    texto:
      'Encargué llaveros como recuerdo para un bautizo y quedaron divinos. Calidad increíble y a muy buen precio. Volveré a pedir.',
    estrellas: 5,
    hilo: 'amarillo',
  },
  {
    id: 'com-5',
    nombre: 'Sofía Ángeles',
    pieza: 'Tapete de margaritas',
    texto:
      'El tapete le dio muchísima calidez a mi sala. Se siente resistente y bien hecho. Sin duda un trabajo artesanal de primera.',
    estrellas: 5,
    hilo: 'naranja',
  },
  {
    id: 'com-6',
    nombre: 'Ana Cristina',
    pieza: 'Hongos decorativos',
    texto:
      'Los hongos de colores son un encanto, se ven aún mejor en persona. Salo es súper linda y atenta. ¡Totalmente recomendada!',
    estrellas: 5,
    hilo: 'rosa',
  },
];

/**
 * Lugares y formas de entrega (datos generales de ejemplo).
 * ⚠️ Confirmar con Salo las zonas de entrega en persona y la paquetería real.
 */
export const lugaresEntrega: LugarEntrega[] = [
  {
    id: 'entrega-local',
    tipo: 'persona',
    nombre: 'Entrega en persona',
    detalle: 'Punto de encuentro a convenir en la zona local, sin costo de envío.',
    hilo: 'verde',
  },
  {
    id: 'entrega-evento',
    tipo: 'persona',
    nombre: 'Pedidos para eventos',
    detalle: 'Entrega coordinada para graduaciones, bautizos y celebraciones especiales.',
    hilo: 'rosa',
  },
  {
    id: 'entrega-nacional',
    tipo: 'envio',
    nombre: 'Envíos a todo México',
    detalle: 'Enviamos por paquetería a cualquier estado del país con número de guía.',
    hilo: 'azul',
  },
  {
    id: 'entrega-empaque',
    tipo: 'envio',
    nombre: 'Empaque de regalo',
    detalle: 'Cada pieza se empaca con cuidado, lista para regalar al llegar.',
    hilo: 'amarillo',
  },
];

/**
 * Precios orientativos de arranque ("desde").
 * ⚠️ Ajustar con los precios reales de Salo. El precio final depende del
 * tamaño, el detalle y la personalización de cada pieza.
 */
export const precios: PrecioItem[] = [
  {
    id: 'precio-llaveros',
    nombre: 'Llaveros y miniaturas',
    desde: '$80',
    nota: 'Precio por pieza; baja al pedir varios para recuerdos.',
    hilo: 'amarillo',
  },
  {
    id: 'precio-decoracion',
    nombre: 'Decoración y hogar',
    desde: '$150',
    nota: 'Tapetes, hongos y piezas según tamaño.',
    hilo: 'naranja',
  },
  {
    id: 'precio-religiosas',
    nombre: 'Figuras religiosas',
    desde: '$200',
    nota: 'Vírgenes y santos según altura y detalle.',
    hilo: 'verde',
  },
  {
    id: 'precio-amigurumis',
    nombre: 'Amigurumis personalizados',
    desde: '$300',
    nota: 'Varía según tamaño y nivel de personalización.',
    hilo: 'azul',
  },
  {
    id: 'precio-ramos',
    nombre: 'Ramos de graduación',
    desde: '$350',
    nota: 'Incluye muñeca con toga y flores tejidas.',
    hilo: 'rosa',
  },
  {
    id: 'precio-prendas',
    nombre: 'Suéteres y prendas',
    desde: '$650',
    nota: 'Tejidos a tu medida y diseño.',
    hilo: 'azul',
  },
];

/**
 * Tiempos de elaboración estimados.
 * ⚠️ Confirmar con Salo; en temporada alta pueden variar.
 */
export const tiemposEntrega: TiempoEstimado[] = [
  { id: 'tiempo-1', tipo: 'Llaveros y piezas pequeñas', tiempo: '1 a 2 días' },
  { id: 'tiempo-2', tipo: 'Amigurumis y figuras', tiempo: '2 a 10 días' },
  { id: 'tiempo-3', tipo: 'Ramos, prendas y pedidos grandes', tiempo: '2 a 3 semanas' },
];

/**
 * Formas de pago aceptadas.
 * ⚠️ Confirmar con Salo los métodos y datos reales.
 */
export const metodosPago: MetodoPago[] = [
  {
    id: 'pago-transferencia',
    nombre: 'Transferencia bancaria',
    detalle: 'Te comparto los datos de la cuenta al confirmar tu pedido.',
  },
  {
    id: 'pago-efectivo',
    nombre: 'Efectivo',
    detalle: 'Disponible en entregas en persona.',
  },
  {
    id: 'pago-deposito',
    nombre: 'Depósito en tienda',
    detalle: 'Puedes pagar en efectivo desde tiendas de conveniencia.',
  },
];

/** Anticipo requerido para apartar un pedido personalizado. */
export const anticipoNota =
  'Los pedidos personalizados se apartan con un anticipo del 50%; el resto se cubre al entregar.';

/** Anticipación mínima con la que se deben hacer los pedidos. */
export const antelacionNota =
  'Todos los pedidos deben hacerse con al menos una semana de antelación para poder tejerlos con el cuidado que merecen.';

/**
 * Preguntas frecuentes. También alimentan los datos estructurados FAQPage
 * para SEO (ver la página que la incluye).
 * ⚠️ Ajustar las respuestas con la información real de Salo.
 */
export const faqs: PreguntaFrecuente[] = [
  {
    id: 'faq-personalizado',
    pregunta: '¿Puedo pedir algo totalmente personalizado?',
    respuesta:
      '¡Claro! Puedes pedir un muñeco con un rostro, profesión o personaje en especial. Cuéntame tu idea por WhatsApp y la hacemos realidad.',
  },
  {
    id: 'faq-tiempo',
    pregunta: '¿Cuánto tarda en estar listo mi pedido?',
    respuesta:
      'Depende de la pieza: los llaveros y piezas pequeñas toman de 2 a 4 días, mientras que amigurumis, ramos o prendas pueden tardar de 1 a 3 semanas. Por eso te pido hacer todos los pedidos con al menos una semana de antelación. En temporada alta te confirmo el tiempo al hacer el pedido.',
  },
  {
    id: 'faq-precio',
    pregunta: '¿Cómo se define el precio?',
    respuesta:
      'El precio depende del tamaño, el nivel de detalle y la personalización. En la sección de precios verás valores de arranque ("desde") para darte una idea, y te paso el precio exacto al conocer tu idea.',
  },
  {
    id: 'faq-apartado',
    pregunta: '¿Necesito dar anticipo para apartar?',
    respuesta:
      'Sí. Los pedidos personalizados se apartan con un anticipo del 50% y el resto se cubre al momento de la entrega.',
  },
  {
    id: 'faq-envios',
    pregunta: '¿Hacen envíos a otros estados?',
    respuesta:
      'Sí, enviamos a todo México por paquetería con número de guía. También puedo entregar en persona en la zona local sin costo de envío.',
  },
  {
    id: 'faq-cuidados',
    pregunta: '¿Cómo cuido mi tejido?',
    respuesta:
      'Recomiendo lavar a mano con agua fría y jabón neutro, sin tallar, y secar a la sombra sobre una superficie plana para que conserve su forma.',
  },
];
