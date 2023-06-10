function encriptar(){
    let texto = document.getElementById("texto").value
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagen = document.getElementById("imagen");
    
    let textoCifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length !=0 ){
        texto = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./assets/mensaje-encriptado.png"

    }else {
        imagen.src = "./assets/Mi proyecto.png"
    }
}
