// Paso 1: Crear la función de encriptación y desencriptación
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Paso 2: Conectar las funciones a sus respectivos botones en HTML
document.getElementById("encryptButton").addEventListener("click", function () {
    // Paso 3: Capturar el texto escrito en el campo input
    let texto = document.getElementById("textInput").value;

    // Validar que el texto esté en minúsculas y no contenga caracteres especiales
    if (/^[a-z\s]*$/.test(texto)) {
        // Paso 4: Desarrollar la lógica de encriptación
        let textoEncriptado = encriptarTexto(texto);

        // Paso 5: Mostrar en pantalla el resultado del texto encriptado
        document.getElementById("resultOutput").value = textoEncriptado;
        document.getElementById("resultImage").style.display = "none";
        document.getElementById("resultDescription").style.display = "none";
        document.getElementById("resultOutput").style.display = "block";
    } else {
        alert("Por favor ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.getElementById("decryptButton").addEventListener("click", function () {
    // Paso 3: Capturar el texto escrito en el campo input
    let texto = document.getElementById("textInput").value;

    // Validar que el texto esté en minúsculas y no contenga caracteres especiales
    if (/^[a-z\s]*$/.test(texto)) {
        // Paso 4: Desarrollar la lógica de desencriptación
        let textoDesencriptado = desencriptarTexto(texto);

        // Paso 5: Mostrar en pantalla el resultado del texto desencriptado
        document.getElementById("resultOutput").value = textoDesencriptado;
        document.getElementById("resultImage").style.display = "none";
        document.getElementById("resultDescription").style.display = "none";
        document.getElementById("resultOutput").style.display = "block";
    } else {
        alert("Por favor ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

// Mostrar la imagen y el mensaje cuando la página se carga
window.onload = function() {
    document.getElementById("resultImage").style.display = "block";
    document.getElementById("resultOutput").style.display = "none";
};