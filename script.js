// Seleccionamos todos los elementos con la clase "marca" y "modelo"
let marcas = document.querySelectorAll(".marca");
let modelos = document.querySelectorAll(".modelo");
let enlaces = document.querySelectorAll(".movil a"); // Seleccionamos los enlaces

// Creamos un array para almacenar las marcas, modelos y URLs
const moviles = [];

// Iteramos sobre las NodeLists y extraemos el texto de cada elemento
for (let i = 0; i < marcas.length; i++) {
    let marca = marcas[i].textContent.replace("Marca: ", "").trim();  // Eliminar "Marca: "
    let modelo = modelos[i].textContent.replace("Modelo: ", "").trim(); // Eliminar "Modelo: "
   let pagina = enlaces[i].href;  // Obtenemos la URL del enlace
  let imagen = enlaces[i].querySelector("img").src; // Obtenemos la URL de la imagen
    
    moviles.push({ marca, modelo, pagina, imagen });
}

// Mostramos el array en la consola (opcional)
console.log(moviles);

// Seleccionamos el campo de búsqueda
const busquedaInput = document.querySelector("[data-busqueda]");

// Escuchamos el evento "input" en el campo de búsqueda
busquedaInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase(); // Obtenemos el valor y lo convertimos a minúsculas para una búsqueda insensible a mayúsculas

    // Filtramos los móviles que coincidan con la búsqueda en marca o modelo
    const resultadosFiltrados = moviles.filter(movil => {
        return movil.marca.toLowerCase().includes(value) || movil.modelo.toLowerCase().includes(value);
    });

    // Mostramos los resultados en la consola
    console.log(resultadosFiltrados);

    // Aquí puedes hacer algo con los resultados, como actualizarlos en el DOM:
    mostrarResultados(resultadosFiltrados);
});

// Función para mostrar los resultados en el DOM
function mostrarResultados(resultados) {
    const contenedorResultados = document.querySelector("#padre"); // Aquí puedes usar un contenedor en el DOM para mostrar los resultados

    // Limpiamos el contenedor
    contenedorResultados.innerHTML = "";

    // Si hay resultados, los mostramos
    if (resultados.length > 0) {
        resultados.forEach(movil => {
            const item = document.createElement("div");
            item.classList.add("movil");
            item.innerHTML = `
                <div class="movil">
                    <a href="${movil.pagina}">
                        <img src="${movil.imagen}" alt="Imagen de ${movil.modelo}">
                    </a>
                    <p>Marca: ${movil.marca}</p>
                    <p>Modelo: ${movil.modelo}</p>
                </div>
            `;
            contenedorResultados.appendChild(item);
        });
    } else {
        // Si no hay resultados, mostramos un mensaje
        contenedorResultados.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}



/*
function buscar(params) {
    console.log(busquedaUsuario);
    
    
} */