// Function to update the clock
function updateClock() {
    const now = new Date();

    // Get hours, minutes, and seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update the clock's time
    document.getElementById('hour').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;

    // Get the current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', options);

    // Update the clock's date
    document.getElementById('date').textContent = currentDate;
}

// Set the clock to update every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
