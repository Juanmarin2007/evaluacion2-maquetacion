/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: 'Huellitas Clínica Veterinaria',
  campoOrden: 'precio',
  etiquetaValor: 'Precio'
};

const items = [
  { id: 1, nombre: 'Consulta general', categoria: 'consulta', descripcion: 'Revisión completa del estado de salud.', imagen: 'img/placeholder.svg', precio: 60000, duracionMinutos: 30, especie: 'perros y gatos' },
  { id: 2, nombre: 'Consulta de urgencias', categoria: 'consulta', descripcion: 'Atención prioritaria sin cita previa.', imagen: 'img/placeholder.svg', precio: 95000, duracionMinutos: 45, especie: 'perros y gatos' },
  { id: 3, nombre: 'Control de cachorro', categoria: 'consulta', descripcion: 'Revisión, peso y plan de cuidados.', imagen: 'img/placeholder.svg', precio: 50000, duracionMinutos: 30, especie: 'perros' },
  { id: 4, nombre: 'Vacuna múltiple canina', categoria: 'vacunacion', descripcion: 'Protege contra moquillo, parvovirus y más.', imagen: 'img/placeholder.svg', precio: 70000, duracionMinutos: 15, especie: 'perros' },
  { id: 5, nombre: 'Vacuna triple felina', categoria: 'vacunacion', descripcion: 'Protección básica para gatos.', imagen: 'img/placeholder.svg', precio: 65000, duracionMinutos: 15, especie: 'gatos' },
  { id: 6, nombre: 'Vacuna antirrábica', categoria: 'vacunacion', descripcion: 'Vacuna obligatoria contra la rabia.', imagen: 'img/placeholder.svg', precio: 35000, duracionMinutos: 10, especie: 'perros y gatos' },
  { id: 7, nombre: 'Baño y cepillado', categoria: 'estetica', descripcion: 'Baño con champú suave y secado.', imagen: 'img/placeholder.svg', precio: 45000, duracionMinutos: 60, especie: 'perros' },
  { id: 8, nombre: 'Corte de pelo', categoria: 'estetica', descripcion: 'Corte según la raza y el gusto del dueño.', imagen: 'img/placeholder.svg', precio: 55000, duracionMinutos: 90, especie: 'perros' },
  { id: 9, nombre: 'Corte de uñas', categoria: 'estetica', descripcion: 'Corte y limado seguro de uñas.', imagen: 'img/placeholder.svg', precio: 15000, duracionMinutos: 15, especie: 'perros y gatos' },
  { id: 10, nombre: 'Cuadro hemático', categoria: 'laboratorio', descripcion: 'Examen de sangre completo.', imagen: 'img/placeholder.svg', precio: 48000, duracionMinutos: 20, especie: 'perros y gatos' },
  { id: 11, nombre: 'Coprológico', categoria: 'laboratorio', descripcion: 'Examen para detectar parásitos.', imagen: 'img/placeholder.svg', precio: 30000, duracionMinutos: 15, especie: 'perros y gatos' },
  { id: 12, nombre: 'Ecografía abdominal', categoria: 'laboratorio', descripcion: 'Imagen de órganos internos.', imagen: 'img/placeholder.svg', precio: 120000, duracionMinutos: 40, especie: 'perros y gatos' }
];
