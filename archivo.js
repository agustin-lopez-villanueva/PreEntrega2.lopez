
var caracteresDisponibles = {
    numeros: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    letras: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    simbolos: ['!', '@', '#', '$', '%', '&', '*', '+', '-', '_', '?']
  };
  
 
  function generarContrasena() {
    var longitud = parseInt(document.getElementById("longitud").value);
    var opcion = document.getElementById("opciones").value;
    var caracteres = caracteresDisponibles[opcion];
    var contrasena = '';
  
    for (var i = 0; i < longitud; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres[indiceAleatorio];
    }
  
    document.getElementById("contrasena").textContent = contrasena;
  }
  
  
  function buscarCaracter(array, caracter) {
    return array.includes(caracter);
  }
  
  
  function filtrarCaracteres(subcadena) {
    var caracteresFiltrados = {};
  
    Object.keys(caracteresDisponibles).forEach(function(opcion) {
      var caracteres = caracteresDisponibles[opcion];
      var caracteresFiltradosOpcion = caracteres.filter(function(caracter) {
        return caracter.includes(subcadena);
      });
      caracteresFiltrados[opcion] = caracteresFiltradosOpcion;
    });
  
    return caracteresFiltrados;
  }