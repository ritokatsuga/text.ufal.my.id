fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
fetch('samping.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('samping').innerHTML = data;
        const script = document.createElement('script');
        script.src = '/skripjam.js';
        document.body.appendChild(script);
    });
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });