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
        id: "seen",
        name: "Yes",

    },
    {
        id: "not",
        name: "No",

    }


];

// new function stuff
const productSelect = document.getElementById('product');


products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


function handleSubmit(event) {

    event.preventDefault();
    window.location.href = '2dayhome.html';
}



