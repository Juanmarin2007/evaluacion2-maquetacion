const estado = {
  categoria: 'todas',
  texto: '',
  orden: 'nombre-asc'
};

// Issue #3 - Crear una tarjeta
function crearCard(item) {
  const valor = item[configuracion.campoOrden];

  return `
    <div class="col">
      <article class="card h-100 rounded-4 border-0 shadow-sm">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
          <span class="badge">${item.categoria}</span>
          <h3 class="card-title">${item.nombre}</h3>
          <p class="card-text">${item.descripcion}</p>
          <p><strong>Precio:</strong> $${valor.toLocaleString('es-CO')}</p>
          <p><strong>Duración:</strong> ${item.duracionMinutos} minutos</p>
          <p><strong>Especie:</strong> ${item.especie}</p>
        </div>
      </article>
    </div>
  `;
}

// Issue #3 - Crear todas las tarjetas
function generarHTML(lista) {
  if (lista.length === 0) {
    return '<p class="text-center">No hay resultados.</p>';
  }

  return lista.map(crearCard).join('');
}

// Issue #4 - Filtrar por categoría
function filtrarPorCategoria(lista, categoria) {
  if (categoria === 'todas') {
    return [...lista];
  }

  return lista.filter(item => item.categoria === categoria);
}

// Issue #4 - Buscar por texto
function buscarPorTexto(lista, texto) {
  const textoLimpio = texto.trim().toLowerCase();

  if (textoLimpio === '') {
    return [...lista];
  }

  return lista.filter(item =>
    item.nombre.toLowerCase().includes(textoLimpio) ||
    item.descripcion.toLowerCase().includes(textoLimpio)
  );
}

// Issue #4 - Ordenar
function ordenarItems(lista, criterio) {
  const copia = [...lista];

  if (criterio === 'nombre-asc') {
    return copia.sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
  }

  if (criterio === 'valor-asc') {
    return copia.sort((a, b) =>
      a[configuracion.campoOrden] - b[configuracion.campoOrden]
    );
  }

  if (criterio === 'valor-desc') {
    return copia.sort((a, b) =>
      b[configuracion.campoOrden] - a[configuracion.campoOrden]
    );
  }

  return copia;
}

// Issue #4 - Aplicar filtros, búsqueda y orden
function aplicarFiltros(lista, estadoActual) {
  let resultado = filtrarPorCategoria(
    lista,
    estadoActual.categoria
  );

  resultado = buscarPorTexto(
    resultado,
    estadoActual.texto
  );

  resultado = ordenarItems(
    resultado,
    estadoActual.orden
  );

  return resultado;
}

// Issue #4 - Actualizar la vista
function actualizarVista() {
  const resultado = aplicarFiltros(items, estado);

  document.getElementById('catalogo').innerHTML =
    generarHTML(resultado);

  document.getElementById('contador').textContent =
    `Mostrando ${resultado.length} de ${items.length} resultados`;
}

// Issue #4 - Iniciar eventos
function iniciar() {
  const botones = document.querySelectorAll('[data-categoria]');
  const buscador = document.getElementById('buscador');
  const orden = document.getElementById('orden');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      estado.categoria = boton.dataset.categoria;

      botones.forEach(btn => {
        btn.setAttribute(
          'aria-pressed',
          btn === boton ? 'true' : 'false'
        );
      });

      actualizarVista();
    });
  });

  buscador.addEventListener('input', () => {
    estado.texto = buscador.value;
    actualizarVista();
  });

  orden.addEventListener('change', () => {
    estado.orden = orden.value;
    actualizarVista();
  });

  actualizarVista();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', iniciar);
}