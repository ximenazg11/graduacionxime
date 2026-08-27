// Fecha del evento:
// 14 de noviembre de 2026 a las 3:00 p. m.
//
// Al no indicar una zona horaria dentro de la fecha,
// el navegador utiliza la hora local del dispositivo.

const fechaEvento = new Date("2026-11-14T15:00:00");

const elementoDias = document.getElementById("dias");
const elementoHoras = document.getElementById("horas");
const elementoMinutos = document.getElementById("minutos");
const elementoSegundos = document.getElementById("segundos");

function agregarCero(numero) {
    return String(numero).padStart(2, "0");
}

function actualizarCuentaRegresiva() {

    const ahora = new Date();
    const diferencia = fechaEvento.getTime() - ahora.getTime();

    // Si la fecha ya pasó
    if (diferencia <= 0) {

        elementoDias.textContent = "00";
        elementoHoras.textContent = "00";
        elementoMinutos.textContent = "00";
        elementoSegundos.textContent = "00";

        clearInterval(intervaloCuentaRegresiva);

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    elementoDias.textContent = agregarCero(dias);
    elementoHoras.textContent = agregarCero(horas);
    elementoMinutos.textContent = agregarCero(minutos);
    elementoSegundos.textContent = agregarCero(segundos);
}

actualizarCuentaRegresiva();

const intervaloCuentaRegresiva = setInterval(
    actualizarCuentaRegresiva,
    1000
);