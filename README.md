HTML: Cree una estructura básica con encabezado y secciones para cada sticker.
Cada sección incluye una imagen y un input donde el usuario puede ingresar la cantidad deseada. Hay un botón etiquetado como "Calcular" que activa la función calcularStickers() al hacer clic. Un párrafo con id="resultado" se usará para mostrar el resultado.

CSS: Aplique estilos básicos al cuerpo para usar una fuente legible y centrar el contenido.
Definimos estilos para los contenedores de sticker, las imágenes y los inputs para que se vean correctamente en la página.

JavaScript: La función calcularStickers() se ejecuta cuando se hace clic en el botón "Calcular".
Obtengo y convierto a números enteros los valores ingresados en cada input.
Sumo las cantidades de stickers seleccionadas para obtener totalStickers.
Dependiendo del valor de totalStickers, actualizamos el contenido del párrafo resultadoParrafo para mostrar el mensaje adecuado ("Llevas X stickers" o "Llevas demasiados stickers").
