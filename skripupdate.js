for (let week = 1; week <= 52; week++) {
    let weekStr = week.toString().padStart(2, '0'); // Ensure week number is two digits
    fetch(`/update/2024_${weekStr}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(`2024_${weekStr}`).innerHTML = data;
        })
        .catch(error => console.error(`Error fetching week ${weekStr}:`, error));
}