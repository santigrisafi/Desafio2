let contadorVeces = 0;

function getRadio() {
  let radio = document.getElementById("radio").value;
  return parseFloat(radio);
}

function areaDelCírculo() {
  let radio = getRadio();
  if (!validarRadio(radio)) {
    alert(
      "Radio no valido, no pueden ser valores negativos, pruebe con valores positivos."
    );
  } else {
    let area = Number(calcularArea(radio));
    if (validarArea(area)) {
      alert("Area calculada de la circunsferencia : " + area);
      document.write("Area calculada de la circunsferencia : " + area);
    } else {
      alert(
        "Valor de area fuera del limite. No se puede calcular una area mayor a 100. Prueba con valores entre 0 y 100"
      );
      document.write(
        "Valor de area fuera del limite. No se puede calcular una area mayor a 100. Prueba con valores entre 0 y 100"
      );
    }
  }
}

function validarRadio(radio) {
  return radio > 0 ? true : false;
}

function validarArea(area) {
  return area > 0 && area < 100 ? area : alert("Area fuera de rango");
}

function calcularArea(radio) {
  return parseFloat(3.14 * Math.pow(radio, 2));
}

function ejecuccionVeces() {
  return contadorVeces++;
}
