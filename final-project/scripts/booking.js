// dates
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `${currentYear}`;
}





const products = [
    {
        id: "seen",
        name: "Yes",

    },
    
    {
        id: "not",
        name: "No",

    },
    {
        id: "soon",
        name: "I will soon!",

    }


];


const productSelect = document.getElementById('show');


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



