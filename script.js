// Seleccionamos el botón y le añadimos un evento de clic
document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Cambia el color de fondo del cuerpo de la página
    document.body.style.backgroundColor = getRandomColor();
});

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
