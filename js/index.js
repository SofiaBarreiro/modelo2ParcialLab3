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
        crearFormulario();
    });
};
function crearFormulario() {
    var categorias = ["Clase", "Nombre", "Raza", "Tipo", "CantVidas"];
    var form = document.getElementById("form");
    categorias.map(function (elemento) {
        var label = document.createElement("label");
        label.style.display = "block";
        var datoLabel = document.createTextNode(elemento);
        label.appendChild(datoLabel);
        form.appendChild(label);
        var select = document.createElement('select');
        if (elemento == 'Clase') {
            var clases = ['-', 'Perro', 'Gato', 'Pajaro'];
            var select = createSelect(clases);
            select.setAttribute('id', 'selectFormulario');
            form.appendChild(select);
        }
        else {
            if (elemento == 'Tipo') {
                var clases = ['-', 'Rapiña', 'Loro'];
                var select = createSelect(clases);
                select.setAttribute('id', 'Tipo');
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
        }
    });
    agregarEventoSelect();
    crearBotones(form);
    eventosBotones();
}
function eventosBotones() {
    var form = document.getElementById('form');
    var tabla = document.getElementById('tabla');
    var btnCancelar = document.getElementById('btnCancelar');
    var btnGuardar = document.getElementById('btnGuardar');
    btnCancelar.addEventListener('click', function () { cerrarFormulario(form), tabla.hidden = false; });
    btnGuardar.addEventListener("click", function () {
        var retorno = obtenerDatosForm();
        cerrarFormulario(form);
        tabla.hidden = false;
    });
}
function cerrarFormulario(form) {
    var child = form.lastElementChild;
    while (child) {
        form.removeChild(child);
        child = form.lastElementChild;
    }
    form.hidden = true;
    document.getElementById('fila1').hidden = false;
}
function crearBotones(formulario) {
    var fila = document.createElement('tr');
    var botonGuardar = document.createElement("button");
    botonGuardar.setAttribute('id', 'btnGuardar');
    botonGuardar.setAttribute("type", "button");
    botonGuardar.textContent = 'Guardar';
    var botonCancelar = document.createElement("button");
    botonCancelar.setAttribute("type", "button");
    botonCancelar.textContent = 'Cerrar';
    botonCancelar.setAttribute('id', 'btnCancelar');
    fila.appendChild(botonGuardar);
    fila.appendChild(botonCancelar);
    formulario.appendChild(fila);
}
function createSelect(clases) {
    var select = document.createElement('select');
    select.setAttribute('class', "selectTable");
    var option;
    clases.map(function (value) {
        option = document.createElement("option");
        option.setAttribute("value", value);
        var texto = document.createTextNode(value);
        option.appendChild(texto);
        select.appendChild(option);
    });
    return select;
}
function crearTabla() {
    var tabla = document.getElementById('tabla');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var encabezados = ['Mascota', 'Nombre', 'Raza', 'Cant. de vidas', 'Tipo'];
    thead.appendChild(tr);
    encabezados.map(function (value) {
        var th = document.createElement('th');
        var text = document.createTextNode(value);
        th.appendChild(text);
        tr.appendChild(th);
    });
    // animal de ejemplo
    tabla.appendChild(thead);
    var texto = ['Pajaro', 'Piolín', '-', '-', 'Loro'];
    agregarFilaLatabla(tabla, texto);
}
function agregarFilaLatabla(tabla, texto) {
    var tr = document.createElement('tr');
    texto.map(function (element) {
        var td = document.createElement('td');
        var text = document.createTextNode(element);
        td.appendChild(text);
        tr.appendChild(td);
    });
    tabla.appendChild(tr);
}
function agregarEventoSelect() {
    var select = document.getElementById('selectFormulario');
    select.addEventListener('change', function () {
        var nombreI = document.getElementById('Nombre');
        var razaI = document.getElementById('Raza');
        var tipoI = document.getElementById('Tipo');
        var cantVidasI = document.getElementById('CantVidas');
        console.log(select.value);
        razaI.disabled = true;
        tipoI.disabled = true;
        cantVidasI.disabled = true;
        nombreI.disabled = true;
        switch (select.value) {
            case 'Pajaro':
                nombreI.disabled = false;
                tipoI.disabled = false;
                break;
            case 'Gato':
                nombreI.disabled = false;
                cantVidasI.disabled = false;
                break;
            case 'Perro':
                nombreI.disabled = false;
                razaI.disabled = false;
                break;
            default:
                break;
        }
    });
}
function obtenerDatosForm() {
    var select = document.getElementById('selectFormulario');
    var nombreI = document.getElementById('Nombre');
    var razaI = document.getElementById('Raza');
    var tipoI = document.getElementById('Tipo');
    var cantVidasI = document.getElementById('CantVidas');
    var retono = validarCampos(select.value, nombreI.value, razaI.value, cantVidasI.value);
    var retornoJson = null;
    if (retono) {
        retornoJson = {
            "Clase": select.value,
            "Nombre": nombreI.value,
            "Raza": razaI.value,
            "Tipo": tipoI.value,
            'CantVidas': cantVidasI.value
        };
    }
    return retornoJson;
}
function validarCampos(mascota, nombre, raza, cantidadVidas) {
    var retorno = true;
    if (nombre.length > 0 && nombre.toString() && mascota != "-") {
        // document.getElementById('mascota').style.borderColor = "rgb(153, 17, 17)";
        alert('Uno de los datos ingresados es incorrecto');
        retorno = false;
    }
    if (raza.length > 0 && raza.toString() && mascota == 'Perro') {
        // document.getElementById('Modelo').style.borderColor = "rgb(153, 17, 17)";
        alert('Uno de los datos ingresados es incorrecto');
        retorno = false;
    }
    if (cantidadVidas < 1 || cantidadVidas > 9 && mascota == 'Gato') {
        // document.getElementById('selectFormulario').style.borderColor = "rgb(153, 17, 17)";
        alert('Uno de los datos ingresados es incorrecto');
        retorno = false;
    }
    return retorno;
}
