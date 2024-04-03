
function calcular() {
    let n1 = parseFloat(document.getElementById('factura').value);
    let n2 = parseFloat(document.getElementById('propina').value);

    let total = n1 + ( n1 * (n2/100) );

    document.getElementById('total').value = total.toFixed(2);
}