document.getElementById('getDataBtn').addEventListener('click', () => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data').innerText = data.message;
      })
      .catch(error => console.error(error));
  });
  