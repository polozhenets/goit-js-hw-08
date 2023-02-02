import { galleryItems, createGallery } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryList = document.querySelector('.gallery');

createGallery(galleryItems, galleryList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
