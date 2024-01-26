
function encriptar() {
    var textoEncriptado = document.getElementById('texto-encriptado').value;
    var textoEncriptadoResultado = textoEncriptado.split('').reverse().join('');

    document.getElementById('texto-desencriptado').value = textoEncriptadoResultado;
}

function desencriptar() {
    var textoDesencriptado = document.getElementById('texto-desencriptado').value;

    var textoOriginal = textoDesencriptado.split('').reverse().join('');

    document.getElementById('texto-desencriptado').value = textoOriginal;
}

function copiar() {
    var textoDesencriptado = document.getElementById('texto-desencriptado');

    textoDesencriptado.select();
    textoDesencriptado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    mostrarMensajeCopiado();
}

function mostrarMensajeCopiado() {
    var mensaje = document.getElementById('mensaje-copiado');
    mensaje.style.display = 'block';

    setTimeout(function() {
        mensaje.style.display = 'none';
    }, 2000); 
}