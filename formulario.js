var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var nacionalidad = na.value;

  //Asigna los valores
  console.log(nombre, edad);
  console.log(nacionalidad);
 //imprime los inputs
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad >= 18)
    && (edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  } //Valida que el nombre no sea 0 o menor y que tenga cierto radio de edad
}

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }//Revisa el resultado del select y da una nacionalidad
  var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
//Creación del botón borrar usuario
  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
      }
var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.className = "elemento-lista";
lista.appendChild(elementoLista);


var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
inputNombre.value = nombre;
elementoLista.appendChild(espacio);


function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}//Agrega los elementos en el DOM

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);
//Envio de elementos

var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);
//Da espacio al DOM
}

