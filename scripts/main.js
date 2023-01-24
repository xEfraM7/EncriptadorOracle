function encriptar() {
  let str = document.getElementById("inputText").value.toLowerCase();
  if (str === "") {
    alert("Introduzca algo");
  } else {
    let resultado = str
      .replace(/e/gim, "enter")
      .replace(/o/gim, "ober")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/u/gim, "ufat");
    document.getElementById("NotFoundIMG").style.display = "none";
    document.getElementById("NotFoundText").style.display = "none";
    document.getElementById("textArea").innerHTML = resultado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    return resultado;
  }
}

function desencriptar() {
  let str = document.getElementById("inputText").value.toLowerCase();
  if (str === "") {
    alert("Introduzca algo");
  } else {
    let resultado = str
      .replace(/enter/gim, "e")
      .replace(/ober/gim, "o")
      .replace(/imes/gim, "i")
      .replace(/ai/gim, "a")
      .replace(/ufat/gim, "u");
    document.getElementById("NotFoundIMG").style.display = "none";
    document.getElementById("NotFoundText").style.display = "none";
    document.getElementById("textArea").innerHTML = resultado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    return resultado;
  }
}

function copy() {
  const str = document.getElementById("inputText").value.toLowerCase();
  let contenido = document.querySelector("textArea");
  contenido.select();
  document.execCommand("cut");
  alert("Se copio!");
}
