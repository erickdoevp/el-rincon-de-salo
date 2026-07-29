/**
 * Tipos del dominio de la landing de El Rincón de Salo.
 * Se mantienen aquí para reutilizarlos cuando lleguen nuevas features
 * (catálogo, carrito, panel de pedidos, etc.).
 */

/** Color de hilo del logo usado para codificar cada categoría. */
export type Hilo = 'amarillo' | 'verde' | 'azul' | 'naranja' | 'rosa';

export interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  hilo: Hilo;
  imagen: string;
  alt: string;
}

export interface Tejido {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  /** Piezas que ocupan dos filas en el mosaico. */
  alto?: boolean;
}

export interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface Comentario {
  id: string;
  /** Nombre de quien deja el comentario. */
  nombre: string;
  /** Pieza o pedido al que se refiere (contexto del testimonio). */
  pieza: string;
  /** Texto del testimonio. */
  texto: string;
  /** Calificación de 1 a 5 estrellas. */
  estrellas: number;
  /** Color de hilo para codificar la tarjeta. */
  hilo: Hilo;
}

export interface LugarEntrega {
  id: string;
  /** 'persona' = entrega en mano; 'envio' = paquetería. */
  tipo: 'persona' | 'envio';
  nombre: string;
  detalle: string;
  hilo: Hilo;
}

export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface PrecioItem {
  id: string;
  nombre: string;
  /** Precio orientativo de arranque, p. ej. "$120". */
  desde: string;
  nota: string;
  hilo: Hilo;
}

export interface TiempoEstimado {
  id: string;
  tipo: string;
  tiempo: string;
}

export interface MetodoPago {
  id: string;
  nombre: string;
  detalle: string;
}

export interface EnlaceNav {
  etiqueta: string;
  ancla: string;
}

export interface Contacto {
  /** Número en formato internacional sin signos, p. ej. 5215512345678 */
  whatsapp: string;
  instagramUsuario: string;
  instagramUrl: string;
  correo: string;
  ubicacion: string;
}
