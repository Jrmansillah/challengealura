const boton1 = document.querySelector('.boton-1');
const boton2 = document.querySelector('.boton-2')
const boton = document.querySelector('.boton');
const cuadro = document.querySelector('.cuadro');
const input = document.querySelector('input[type="text"]');


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptarMensaje(mensaje) {
    // Reemplazar cada vocal en el mensaje por el valor correspondiente
    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");

    // Devolver el mensaje encriptado
    return mensaje;
}

function desencriptarMensaje(mensajed) {
    // Reemplazar cada valor por la vocal correspondiente
    mensajed = mensajed.replace(/enter/g, "e");
    mensajed = mensajed.replace(/imes/g, "i");
    mensajed = mensajed.replace(/ai/g, "a");
    mensajed = mensajed.replace(/ober/g, "o");
    mensajed = mensajed.replace(/ufat/g, "u");

    // Devolver el mensaje desencriptado
    return mensajed;
}

function alerta(){
    alert("Se ha copiado el texto")
}





boton1.addEventListener('click', () => {
  // Agrega la clase "animacion-360" al cuadro
  cuadro.classList.add('animacion-360');

  // Define un temporizador para que se ejecute después de que se complete la animación
  setTimeout(() => {
    // Quita la clase "animacion-360" del cuadro
    cuadro.classList.remove('animacion-360');

    // Obtiene el valor del input
    const mensaje = input.value;

    // Encriptar el mensaje
    const mensajeEncriptado = encriptarMensaje(mensaje);

    // Muestra el mensaje encriptado en el cuadro
    cuadro.innerText = mensajeEncriptado;
    // Muestra el botón de copiar
    boton.style.display = 'inline-block';
    
  }, 1000);
});

boton2.addEventListener('click', () => {
    // Agrega la clase "animacion-360" al cuadro
    cuadro.classList.add('animacion-360');

    // Define un temporizador para que se ejecute después de que se complete la animación
    setTimeout(() => {
      // Quita la clase "animacion-360" del cuadro
      cuadro.classList.remove('animacion-360');
  
      // Obtiene el valor del input
      const mensajed = input.value;
  
      // Desencriptar el mensaje
      const mensajeEncriptado = desencriptarMensaje(mensajed);
  
      // Muestra el mensaje Desencriptado en el cuadro
      cuadro.innerText = mensajeEncriptado;
      boton.style.display = 'inline-block';
      
    }, 1000);
  });

  
  



