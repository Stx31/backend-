const nameForm = document.getElementById('nameForm');

nameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;

    fetch('/guardar-nombre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Nombre guardado con éxito: ${data.name}`);
    })
    .catch(error => console.error('Error al guardar nombre: ' + error));
});
