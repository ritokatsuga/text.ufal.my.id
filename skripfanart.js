fetch('/fanartfavorit.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fanartfavorit').innerHTML = data;
        if (window.twttr && twttr.widgets) {
            twttr.widgets.load();
        } else {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://platform.twitter.com/widgets.js';
            script.charset = 'utf-8';
            document.body.appendChild(script);
        }
    });