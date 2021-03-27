import { desktopData } from '../../data/images-data.js';
import { mobileData } from '../../data/images-data.js';

const cardsContainer = document.getElementById('cards-container');

// Cards container Header

const cardHeaderDiv = document.createElement('div');
cardHeaderDiv.classList.add("cards__section-header");
cardsContainer.appendChild(cardHeaderDiv);

const cardHeaderTitle = document.createElement('h1');
cardHeaderTitle.textContent = "OUR CREATIONS";
cardHeaderDiv.appendChild(cardHeaderTitle);

const cardHeaderBtn = document.createElement('button');
cardHeaderBtn.classList.add("cards__section-btn");
cardHeaderBtn.textContent = "SEE ALL";
cardHeaderDiv.appendChild(cardHeaderBtn);

// Cards

const cardsGrid = document.createElement('div');
cardsGrid.classList.add("cards__section-grid");
cardsContainer.appendChild(cardsGrid);

window.addEventListener('resize', () => {
    window.location.reload();
});

function cardImagesData() {
    const windowWidth = window.innerWidth;
    let cardImageData;

    if (windowWidth < 500) {
        cardImageData = mobileData;
    } else {
        cardImageData = desktopData;
    }

    return cardImageData
}

const cardImages = cardImagesData();

cardImages.map(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    cardsGrid.appendChild(cardDiv);

    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', card.image);
    cardDiv.appendChild(cardImage);

    const cardTitle = document.createElement('h2');
    cardTitle.innerHTML = card.title;
    cardDiv.appendChild(cardTitle);
});

const cardGridBtn = document.createElement('button');
cardGridBtn.classList.add("cards__section-grid-btn");
cardGridBtn.textContent = "SEE ALL";
cardsContainer.appendChild(cardGridBtn);