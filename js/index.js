window.onload = function () {
    var form = document.getElementById('form');
    form.hidden = true;
    var botonAgregar = document.getElementById('agregar');
    crearTabla();
    var tabla = document.getElementById('tabla');
    botonAgregar.addEventListener('click', function () {
        tabla.hidden = true;
        form.hidden = false;
        // document.getElementById('fila1').hidden = true;
        // mostrarFormulario();
        console.log('hola');
        crearFormulario();
    });
};
function crearFormulario() {
    var categorias = ["Clase", "Nombre", "Raza", "tipo"];
    var form = document.getElementById("form");
    categorias.forEach(function (elemento, indice) {
        var label = document.createElement("label");
        label.style.display = "block";
        var datoLabel = document.createTextNode(elemento);
        label.appendChild(datoLabel);
        form.appendChild(label);
        var select = document.createElement('select');
        if (elemento == 'Clase') {
            var select = createSelect();
            select.setAttribute('id', 'selectFormulario');
            form.appendChild(select);
        }
        else {
            var dato = document.createElement("input");
            dato.setAttribute("id", elemento);
            dato.setAttribute("type", "text");
            dato.style.display = "block";
            dato.setAttribute('position', 'fixed');
            dato.placeholder = elemento;
            form.appendChild(dato);
        }
    });
}
function createSelect() {
    var select = document.createElement('select');
    select.setAttribute('class', "selectTable");
    var option;
    var index;
    var clases = ['-', 'Perro', 'Gato', 'Pajaro'];
    for (index = 0; index < clases.length; index++) {
        option = document.createElement("option");
        option.setAttribute("value", clases[index]);
        var texto = document.createTextNode(clases[index]);
        option.appendChild(texto);
        select.appendChild(option);
    }
    return select;
}
function crearTabla() {
    var tabla = document.getElementById('tabla');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var encabezados = ['Mascota', 'Nombre', 'Raza', 'Cant. de vidas', 'Tipo'];
    thead.appendChild(tr);
    for (var i in encabezados) {
        var th = document.createElement('th');
        var text = document.createTextNode(encabezados[i]);
        th.appendChild(text);
        tr.appendChild(th);
    }
    tabla.appendChild(thead);
}
