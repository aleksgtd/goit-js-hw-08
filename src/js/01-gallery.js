// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// import SimpleLightbox from './../../node_modules/simplelightbox';
import SimpleLightbox from 'simplelightbox';
// import './../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markupMade = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</div>`;
  })
  .join('');

const galleryMade = gallery.insertAdjacentHTML('beforeend', markupMade);
const unnecessaryLinks = document.querySelectorAll('a.gallery__item');

const newLightbox = new SimpleLightbox('a.gallery__item', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
