
function calcular() {
    let n1 = parseFloat(document.getElementById('comida').value);
    let n2 = parseFloat(document.getElementById('propina').value);

    let total = n1 + ( n1 * (n2/100) );

    document.getElementById('total').value = total.toFixed(2);
}

function completarComida(comida, precio) {
    document.getElementById('comida').value = comida;
    document.getElementById('precio').value = precio;
}

function agregarComida() {
    let comida = document.getElementById('comida').value;
    let precio = document.getElementById('precio').value;

    let listaComida = document.getElementById('listaComida');

    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = comida + ": " + precio + " €";

    listaComidas.appendChild(listItem);
a
    document.getElementById("comida").value = "";
    document.getElementById("precio").value = "";
}