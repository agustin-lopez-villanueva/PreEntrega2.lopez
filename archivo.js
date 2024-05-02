
const caracteresDisponibles = {
  numeros: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  letras: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  simbolos: ['!', '@', '#', '$', '%', '&', '*', '+', '-', '_', '?']
};

function generarContrasena() {
  const longitud = parseInt(document.getElementById("longitud").value);
  const opcion = document.getElementById("opciones").value;
  const caracteres = caracteresDisponibles[opcion];
  let contrasena = '';

  for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres[indiceAleatorio];
  }

  document.getElementById("contrasena").textContent = contrasena;
}

function buscarCaracter(array, caracter) {
  return array.includes(caracter);
}

function filtrarCaracteres(subcadena) {
  const caracteresFiltrados = {};

  Object.keys(caracteresDisponibles).forEach(function(opcion) {
      const caracteres = caracteresDisponibles[opcion];
      const caracteresFiltradosOpcion = caracteres.filter(function(caracter) {
          return caracter.includes(subcadena);
      });
      caracteresFiltrados[opcion] = caracteresFiltradosOpcion;
  });

  return caracteresFiltrados;
}
