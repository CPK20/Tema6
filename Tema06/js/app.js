/*
  Tarea 6 · DWEC · Carlos Posadas
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================


const estudiante = {
    nombre: "Carlos",
    apellidos: "Posadas",
    edad: 24,
    curso: "2º DAW",

    presentarse: function () {
      
      console.log("Ejercicio 1: Presentarse");
      return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " +this.curso + ".";

    }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
        salida.textContent = "";

  const lista = document.createElement("u1");
        lista.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  
  claves.forEach(function(clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  salida.append(lista);

  const parrafo = document.createElement("p");
  parrafo.textContent = estudiante.presentarse();
  parrafo.classList.add("mt-3");
  salida.append(parrafo);

  console.log("Ejercicio 1: Ver ficha", estudiante);
}


function cumplirAnios() {

  estudiante.edad = estudiante.edad + 1;
  verFicha();
  console.log("Ejercicio 1: nueva edad", estudiante.edad);

}

function quitarCurso() {

  delete estudiante.curso;
  verFicha();
  console.log("Ejercicio 1: Curso eliminado")

}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    console.log("Ejercicio 2: Lista vacia");
    return;
  }

  const eliminado = colores.pop();
  mostrarColores();

  console.log("Ejercicio 2: color eliminado", eliminado);
  // TODO: si la lista está vacía, avisa con avisar2() y no hagas nada más.
  // TODO: si no, saca el último con pop(), vuelve a pintar la lista y di en la consola qué color ha salido.

}
  
function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    console.log("Ejercicio 2: lista vacía");
    return;
  }

  const eliminado = colores.shift();
  mostrarColores();

  console.log("Ejercicio 2: primer color eliminado", eliminado);
}



mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);

  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos en el catálogo.";

  console.log("Ejercicio 3: Mostrar todos los productos", productos);
  
}

function ordenarPorPrecio() {
  const ordenados = [...productos];

  ordenados.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(ordenados);

  document.querySelector("#mensaje3").textContent = "Productos ordenados de menor a mayor.";

  console.log("Ejercicio 3: Productos ordenados", ordenados);

}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });

  pintarProductos(caros);

  documentquerySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50€.";

  console.log("Ejercicio 3: Productos de más de 50€", caros);

}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();

  if (texto === " ") {
    document.querySelector("#mensaje3").textContent = "Escribe un producto para buscarlo.";
    
    console.log("Ejercicio 3: Búsqueda vacía");
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    document.querySelector("#mensaje3").textContent = "No se ha encontrado el producto.";
    pintarProductos([]);
  }  else {
    pintarProductos([encontrado]);
    document.querySelector("#mensaje3").textContent = "Producto encontrado: " + encontrado.nombre;
  }

  console.log("Ejercicio 3: Resultado de búsqueda", encontrado);

}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Carlos",
  notas: [],

  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Ejercicio 4: Nota no válida", nota);
      return false;
    }

    this.notas.push(nota);
    console.log("Ejercicio 4: nota añadida", nota);
    return true;
  },

  media: function () {
    if (this.notas.length === 0) {
      console.log("Ejercicio 4: No hay notas");
      return 0;
    }

    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);

    const resultado = suma / this.notas.length;
    console.log("Ejercicio 4: media", resultado);
    return resultado;
  }
  
};


function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  const mediaTexto = document.querySelector("#media");

  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const span = document.createElement("span");
    span.classList.add("badge", "me-2");

    if (nota >= 5) {
      span.classList.add("text-bg-success");
    } else {
      span.classList.add("text-bg-danger");
    }

    span.textContent = nota;
    contenedor.append(span);
  });

  if (alumno.notas.length === 0) {
    mediaTexto.textContent = "Todavía no hay notas.";
  } else {
    const resultado = alumno.media();
    mediaTexto.textContent =
      "Media de " + alumno.notas.length +
      " notas: " + resultado.toFixed(2);
  }

  console.log("Ejercicio 4: notas", alumno.notas);
  console.log("Ejercicio 4: texto de la media", mediaTexto.textContent);
}


function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  if (casilla.value.trim() === " ") {
    error.textContent = "Escribe una nota.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: casilla vacía");
    return;
  }

  const nota = Number(casilla.value);

  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe estar entre 0 y 10.";
    error.classList.remove("d-none");
    console.log("Ejercicio 4: nota no válida");
    return;
  }

  error.classList.add("d-none");
  casilla.value = " ";
  mostrarNotas();

  console.log("Ejercicio 4: Nota añadida correctamente", nota);

}

function borrarNotas() {
  alumno.notas = [];

  mostrarNotas();

  document.querySelector("#error4").classList.add("d-none");

  console.log("Ejercicio 4: todas las notas borradas");

}


mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });

  const salida = document.querySelector("#salida5");

  salida.textContent =
    "Array original: " + numeros.join(", ") + "\nArray de dobles: " + dobles.join(", ");

  console.log("Ejercicio 5: array original", numeros);
  console.log("Ejercicio 5: números dobles", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const salida = document.querySelector("#salida5");

  salida.textContent =
    "Array original: " + numeros.join(", ") + "\nNúmeros pares: " + pares.join(", ");

  console.log("Ejercicio 5: números pares", pares);

}

function verSuma() {
  const suma = numeros.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");

  salida.textContent =
    "Array original: " + numeros.join(", ") + "\nSuma total: " + suma;

  console.log("Ejercicio 5: suma total", suma);

}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  const suma = dobles.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");

  salida.textContent =
    "Array original: " + numeros.join(", ") +
    "\n1. Pares (filter): " + pares.join(", ") +
    "\n2. Dobles (map): " + dobles.join(", ") +
    "\n3. Suma (reduce): " + suma;

  console.log("Ejercicio 5: cadena de operaciones");
  console.log("Pares:", pares);
  console.log("Dobles:", dobles);
  console.log("Suma final:", suma);

}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  ciudades.forEach(function (ciudad, indice) {
    const span = document.createElement("span");
    span.classList.add("badge", "text-bg-primary", "me-2", "mb-2");
    span.textContent = indice + ": " + ciudad;
    contenedor.append(span);
  });

  console.log("Ejercicio 6: ciudades", ciudades);

}

function verSlice() {
  const seleccion = ciudades.slice(2, 5);

  document.querySelector("#salida6").textContent =
    "Resultado de slice(2, 5): " + seleccion.join(", ") +
    "\nLongitud del array original: " + ciudades.length;

  console.log("Ejercicio 6: slice", seleccion);

}

function hacerSplice() {
  if (ciudades.length < 3) {
    document.querySelector("#salida6").textContent =
      "No hay suficientes ciudades para realizar splice.";

    console.log("Ejercicio 6: no hay suficientes ciudades");
    return;
  }

  const eliminadas = ciudades.splice(2, 2);

  document.querySelector("#salida6").textContent =
    "Ciudades eliminadas: " + eliminadas.join(", ") +
    "\nLongitud actual: " + ciudades.length;

  mostrarCiudades();

  console.log("Ejercicio 6: splice", eliminadas);

}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];

  mostrarCiudades();

  document.querySelector("#salida6").textContent =
    "Lista original restaurada.";

  console.log("Ejercicio 6: ciudades restauradas", ciudades);

}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();

  const existe = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);

  document.querySelector("#salida6").textContent =
    "Ciudad buscada: " + nombre +
    "\n¿Existe?: " + existe +
    "\nPosición: " + posicion;

  console.log("Ejercicio 6: búsqueda", nombre, existe, posicion);

}

mostrarCiudades();
