import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryCardsMarkup(galleryItems) {
    
  return  galleryItems.map(({ preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
        alt="${description}"
    />
  </a>
</div>`;
    }).join("");  
  
};

const galleryCardsEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryCardsEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryCardsEl.addEventListener('click', onCardClick);


function onCardClick(event){
  event.preventDefault();

  if (!event.currentTarget===event.target) {
    return;
  }
  
  document.addEventListener('keydown', onEscKeyPress,{once:true});

 const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >
`)
  instance.show(); 
  
  function onEscKeyPress(event) {
  
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener('keydown', onEscKeyPress);
  }
}
}

