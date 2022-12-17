import { galleryItems } from './gallery-items.js';
// Change code below this line

const myGalery = document.querySelector(".gallery");

const markup = galleryItems
.map(({ preview, original, description }) => `<div class = "gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false;">
  <img class = "gallery__image" src="${preview}" data-source = "${original}" alt="${description}"/></a></div>`)
.join("");

myGalery.insertAdjacentHTML("afterbegin", markup); 

const galleryItem = document.querySelector(".gallery__image");

myGalery.addEventListener('click', onClick);
function onClick(event, viewOnClick) {
  function viewOnClick(event) {
    event.preventDefault()
  }
  if (event.target.classList.contains("gallery")) {
    return;
  }
  const itemOriginalLink = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(
       `<img  class = "original"  src="${itemOriginalLink}"  alt="${galleryItem.alt}"/>`
     ); 
  instance.show(); 
  
 }


  

