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


// Names
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Get the select element
const productSelect = document.getElementById('product');

// Populate the select options
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Set the value to the product ID
    option.textContent = product.name; // Set the display text to the product name
    productSelect.appendChild(option); // Add the option to the select element
});


function handleSubmit(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Increment review count
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirect to review.html after submission
    window.location.href = 'review.html';
}


 // Display the current review count when the page loads
 window.onload = function () {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    document.getElementById('reviewCount').textContent = `Number of reviews submitted: ${reviewCount}`;
};