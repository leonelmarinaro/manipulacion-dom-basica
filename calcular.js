const titulo = document.querySelector("h1"); //importante utilizar las comillas
const inputUno = document.querySelector("#calcularPrimero");
const inputDos = document.querySelector("#calcularSegundo");
const btnCalcular = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#pResultado");
const formulario = document.querySelector("#formulario");

//btnCalcular.addEventListener("click", btnOnClick); //importante no colocar parentesis a la funcion ()
//por defecto el ultimo botón de un formulario hace el efecto de Submit, lo que lo hace recargar la pagina

formulario.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  event.preventDefault();
  console.log({event});
  const suma = parseInt(inputUno.value) + parseInt(inputDos.value);
  pResultado.innerText = `El resultado de la suma es ${suma}`;
}

// function btnOnClick() {
//   const suma = parseInt(inputUno.value) + parseInt(inputDos.value);
//   pResultado.innerText = `El resultado de la suma es ${suma}`;
// }

//Lo que tenemos que hacer es cambiar el evento de 'click' del botón por el evento 'submit' del formulario
