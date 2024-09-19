window.onload = function() { 
    var hariIni = new Date();
    var tanggal = hariIni.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('hariIni').innerText = tanggal;

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        var dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return weekNo;
    }

    var pekanKe = getWeekNumber(hariIni);
    document.getElementById('pekanIni').innerText = pekanKe;

    var tahunIni = hariIni.toLocaleDateString('id-ID', { year: 'numeric' });
    document.getElementById('tahunIni').innerText = tahunIni;
};