// chill
// Static values for temperature and wind speed
const temperature = 3; // in °C
const windSpeed = 6; // in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Display wind chill if conditions are met
window.onload = function() {
    let windChill = "N/A"; // Default value
    
    // Check conditions for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + " °C";
    }

    // Display the result in the HTML
    document.getElementById('wind-chill').textContent = windChill;
};







// year
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `${currentYear}`;
}

const lastModifiedDate = document.lastModified;

const modifiedElement = document.getElementById('modify');
if (modifiedElement) {
    modifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}