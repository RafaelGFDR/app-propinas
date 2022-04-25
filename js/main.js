function calcProp() {
    var total = document.getElementById('total').value
    var servicio = document.getElementById('servicio').value
    var personas = document.getElementById('personas').value
    var resultado = ((Number(total) * Number(servicio)) / Number(personas))
    var parrafo = document.getElementById('resultado')
    parrafo.innerHTML = 'Total a pagar ' + resultado + ' por persona'
}