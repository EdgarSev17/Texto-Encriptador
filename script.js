const areaTexto = document.querySelector(".area-texto")
const area_texto_encriptado = document.querySelector(".area_texto_encriptado");

function btnEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value)
    area_texto_encriptado.value = textoEncriptado
    areaTexto.value = "";
    area_texto_encriptado.style.backgroundImage = "none"
    
}

function encriptar(stringEncriptado) {
 
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
        
    }
    return stringEncriptado;
        
   
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(areaTexto.value);
    area_texto_encriptado.value = textoEncriptado;
    areaTexto.value = "";
    
}

function desencriptar(stringDesencriptado) {
 
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado;
}

function copiar(){
    let texto = document.getElementById("texto");
    const message = document.querySelector("#message");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    message.innerHTML = "Copiado en el portapapeles";
    setTimeout(()=> message.innerHTML = "", 1000);
}