// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const paletterContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCards(galleryItems);

paletterContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createImgCards( galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');    

}

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()

console.log(galleryItems);
