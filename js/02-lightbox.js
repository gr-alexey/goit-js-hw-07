import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryList);

function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>`).join('')
};
        
    let galley = new SimpleLightbox('.gallery a', {
        captionClass: 'gallery__item',
        captionsData: 'alt',
        captionsDelay: '250'
        })
