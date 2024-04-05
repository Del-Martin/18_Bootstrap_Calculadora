
function completarComida(comida, precio) {
    document.getElementById('comida').value = comida;
    document.getElementById('precio').value = precio;
}

function agregarComida() {
    let comida = document.getElementById('comida').value;
    let precio = document.getElementById('precio').value;

    let listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = comida + ": " + precio + " €";

    listaComidas.appendChild(listItem);
a
    document.getElementById("comida").value = "";
    document.getElementById("precio").value = "";
}

function calcular() {
    var propina = parseFloat(document.getElementById("propina").value);
    var total = 0;

    // Obtener la lista de comidas
    var listaComidas = document.getElementById("listaComidas").getElementsByTagName("li");

    // Iterar sobre cada elemento de la lista de comidas
    for (var i = 0; i < listaComidas.length; i++) {
        // Obtener el texto del elemento de lista y dividirlo en nombre y precio
        var textoComida = listaComidas[i].textContent.trim();
        var partes = textoComida.split(": ");
        // Asegurarse de que haya al menos dos partes (nombre y precio)
        if (partes.length >= 2) {
            // Obtener el precio y eliminar el símbolo "€"
            var precio = parseFloat(partes[1].replace("€", ""));
            // Sumar el precio al total
            total += precio;
        }
    }

    // Calcular el total con la propina
    var totalConPropina = total + (total * (propina / 100));

    // Mostrar el total en el campo correspondiente
    document.getElementById("total").value = totalConPropina.toFixed(2);
}