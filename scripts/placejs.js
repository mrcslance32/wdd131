
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