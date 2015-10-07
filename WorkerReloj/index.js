var worker = undefined;
function CrearWorker() {
    worker = new Worker("reloj.js");
    worker.onmessage=function(evt) {
        var capa = document.getElementById("hora");
        if (evt.data.accion === 1) {
            capa.innerHTML = evt.data.contenido;

        }
        else if (evt.data.accion === 2) {
            capa.style.color = evt.data.contenido;
        }
    }
}
function cambiarColor() {
    var data = { accion: 2 };
    worker.postMessage(data);

}
function cambiarZona() {
    var data = { accion: 1 };
    worker.postMessage(data);
}

CrearWorker();
document.getElementById("btnColor")
    .addEventListener("click", cambiarColor);
document.getElementById("btnZona")
    .addEventListener("click", cambiarZona);

