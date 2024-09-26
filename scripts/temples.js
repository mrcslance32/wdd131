document.getElementById("burger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    const isActive = menu.classList.toggle("active"); // Toggle the 'active' class

    // Change the icon based on menu state
    this.innerHTML = isActive ? '✖' : '&#9776;'; // 'X' when active, hamburger icon when not
});



























// dates
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
// dates end