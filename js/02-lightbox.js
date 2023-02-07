import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryCardsMarkup(galleryItems) {
    
  return  galleryItems.map(({ preview, original, description}) => {
    return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    }).join("");  
  
};

const galleryCardsEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryCardsEl.insertAdjacentHTML('beforeend', galleryMarkup);



let lightbox = new SimpleLightbox('.gallery__item',
    {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
  

