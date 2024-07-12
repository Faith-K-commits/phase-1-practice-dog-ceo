console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function getImages() {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(image => {
            const container = document.querySelector('#dog-image-container');
            const img = document.createElement('img');
            img.src = image;
            container.appendChild(img);
        });
    })
}

const fetchBreed = () => {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breeds = Object.keys(data.message);
        const ul = document.querySelector('#dog-breeds');
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            ul.appendChild(li);
            li.addEventListener('click', () => {
                li.style.color = 'red';
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const filterBreeds = () => {
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.selectedIndex.addEventListener('change', (event) => {
        const letter = event.target.value;
        const lis = document.querySelectorAll('li');
        lis.forEach(li => {
            if (li.textContent.startsWith(letter)) {
                li.style.display = 'block';
            } else {
                li.style.display = 'none';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
   getImages();
     fetchBreed();
   filterBreeds();
 });
