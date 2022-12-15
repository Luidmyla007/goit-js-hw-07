import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const myGalery = document.querySelector(".gallery");

const markup = galleryItems
.map(({ preview, original, description }) => `<li class = "gallery__li">
  <a class="gallery__item" href="${original}" onclick="return false;" >
  <img class = "gallery__image" src="${preview}" alt="${description}"/></a></li>`)
.join("");

myGalery.insertAdjacentHTML("afterbegin", markup); 
const galleryItem = document.querySelector(".gallery__image");

var lightbox = new SimpleLightbox('.gallery a', { captionSelector: 'img', sourceAttrsrc: 'href', 
 captionsData: 'alt', captionDelay: 250 });
