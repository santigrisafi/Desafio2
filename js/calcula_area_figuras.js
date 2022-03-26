let contadorVeces2 = 0;

function calcAreaCuadrado() {
  let lado = parseFloat(document.getElementById("lado").value);
  if (validarLado(lado)) {
    if (!validarArea(calcCuadradoArea(lado))) {
      alert("Valor fuera de rango");
    } else {
      document.write("Area del cuadrado : " + calcCuadradoArea(lado) + " cm");
    }
  }
}

function calcCuadradoArea(lado) {
  return lado * lado;
}

function validarLado() {
  return lado > 0 ? lado : "No es un valor valido para el lado";
}

function calcAreaTriangulo() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);
  if (validarAltura(altura) && validarBase(base)) {
    if (!validarArea(calcTrianguloArea(base, altura))) {
      alert("Valor fuera de rango");
    } else {
      document.write(
        "Area del triangulo : " +
          calcTrianguloArea(base, altura) +
          " cm cuadrados"
      );
    }
  }
}

function calcTrianguloArea(base, altura) {
  return (base * altura) / 2;
}

function validarAltura() {
  return altura > 0 ? altura : "No es un valor valido para la altura";
}

function validarBase() {
  return base > 0 ? base : "No es un valor valido para la base";
}

function calcAreaRectangulo() {
  let base2 = parseFloat(document.getElementById("base2").value);
  let altura2 = parseFloat(document.getElementById("altura2").value);
  if (validarAltura(altura2) && validarBase(base2)) {
    if (!validarArea(calcRectanguloArea(base, altura))) {
      alert("Valor fuera de rango");
    } else {
      document.write(
        "Area del rectangulo : " +
          calcRectanguloArea(base2, altura2) +
          " cm cuadrados"
      );
    }
  }
}

function calcRectanguloArea(base2, altura2) {
  return base2 * altura2;
}

function ejecuccionVeces() {
  return contadorVeces2++;
}

function validarArea(area) {
  return area > 0 && area < 100 ? true : false;
}
