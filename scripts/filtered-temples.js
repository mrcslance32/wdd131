document.getElementById("burger").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const isActive = menu.classList.toggle("active");
  this.innerHTML = isActive ? '✖' : '&#9776;';
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


// New Stuff

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Oakland Temple",
    location: "Oakland, California, United States",
    dedicated: "1964, November, 17",
    area: 80157,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
  },
  {
    templeName: "Meridian Idaho Temple",
    location: "Meridian, Idaho, United States",
    dedicated: "2017, November, 19",
    area: 67331,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-3302-main.jpg"
  },
  {
    templeName: "Denver Colorado Temple",
    location: "Centennial, Colorado, United States",
    dedicated: "1986, November, 24",
    area: 29117,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg"
  },


  // Add more temple objects here...
];

//cards


// filter



// Filter for temples built before 1900 (Old)
const oldTemples = temples.filter(temple => {
  const dedicatedYear = parseInt(temple.dedicated.split(',')[0], 10);
  return dedicatedYear < 1900;
});

// Filter for temples built after 2000 (New)
const newTemples = temples.filter(temple => {
  const dedicatedYear = parseInt(temple.dedicated.split(',')[0], 10);
  return dedicatedYear > 2000;
});

// Filter for temples larger than 90,000 square feet (Large)
const largeTemples = temples.filter(temple => temple.area > 90000);

// Filter for temples smaller than 10,000 square feet (Small)
const smallTemples = temples.filter(temple => temple.area < 10000);

// Home - displays all the temples stored in the array
const allTemples = temples; // This is the original array containing all temples


// array
const templeContainer = document.getElementById('temple-container');

// 


// Function to display temples in the container
function displayTemples(templeArray) {
  const templeContainer = document.getElementById('temple-container');
  templeContainer.innerHTML = ''; // Clear existing content

  templeArray.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.className = 'temple-card';

    templeCard.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Size: ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

    templeContainer.appendChild(templeCard);
  });
}

// old
document.getElementById('old').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  displayTemples(oldTemples); // Show temples dedicated after 2000
});



// Event listener for the "New" link
document.getElementById('new').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  displayTemples(newTemples); // Show temples dedicated after 2000
});

// large
document.getElementById('large').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  displayTemples(largeTemples); // Show temples dedicated after 2000
});

// small
document.getElementById('small').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  displayTemples(smallTemples); // Show temples dedicated after 2000
});

document.getElementById('home').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  displayTemples(allTemples); // Show temples dedicated after 2000
});


// Initial display of all temples
displayTemples(allTemples);
