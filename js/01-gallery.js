import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'

const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryList);
galleryContainer.addEventListener('click', clickOnImage)

function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__link" href = "${original}" >
                <img 
                    class="gallery__image"
                    src='${preview}'
                    data-source="${original}"
                    alt="${description}"
                />
            </a>`).join('')};

function clickOnImage(e) {
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);
    instance.show();
};

