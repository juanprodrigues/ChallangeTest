function cambiarVista(clase) {
    var contador = document.querySelector("." + clase);
    var valContador = Number(contador.childNodes[0].nodeValue);
    document.querySelector("." + clase).innerHTML = valContador + 1;

}