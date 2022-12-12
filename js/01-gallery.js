import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const myGalery = document.querySelector(".gallery");

let galleryItem;
const markup = galleryItems
.map(({ preview, original, description }) => `<div class = "gallery__item">
  <a class="gallery__link" href="${original}">
  <img class = "gallery__image" src="${preview}" alt="${description}"/></a></div>`)
.join("");
console.log(markup);

myGalery.insertAdjacentHTML("afterbegin", markup); 

