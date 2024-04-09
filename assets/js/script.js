// Función para calcular la cantidad de stickers seleccionados
function calcularStickers() {
    // Obtener el valor de cada input y convertirlo a número
    let cantidadSticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    let cantidadSticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    let cantidadSticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    // Calcular el total de stickers seleccionados
    let totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    // Seleccionar el párrafo donde se mostrará el resultado
    let resultadoParrafo = document.getElementById('resultado');

    // Verificar si la cantidad total es menor o igual a 10
    if (totalStickers <= 10) {
        // Mostrar la cantidad de stickers llevados
        resultadoParrafo.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        // Mostrar un mensaje indicando que lleva demasiados stickers
        resultadoParrafo.textContent = 'Llevas demasiados stickers.';
    }
}