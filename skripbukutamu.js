fetch('bukutamu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('bukutamu').innerHTML = data;
    });