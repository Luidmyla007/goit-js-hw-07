import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const myGalery = document.querySelector(".gallery");

// let galleryItem;
const markup = galleryItems
.map(({ preview, original, description }) => `<div class = "gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class = "gallery__image" src="${preview}" data-source = "${original}" alt="${description}"/></a></div>`)
.join("");
 console.log(markup);

myGalery.insertAdjacentHTML("afterbegin", markup); 
const galleryItem = document.querySelector(".gallery__image");
// console.log(galleryItem);
// console.log(galleryItem.src);
// console.log(galleryItem.dataset.source);
// const originalPhoto = document.querySelector('[data-source]');
// console.log(originalPhoto);


myGalery.addEventListener('click', onClick);
function onClick(event) {
  if (event.target.classList.contains("gallery")) { return; }

  const instance = basicLightbox.create(
    `<img  class = "original" src="${galleryItem.dataset.source}" alt="${galleryItem.alt}"/>`
    // const originalPhoto = document.querySelector(".original");
    // originalPhoto.style.cursor = auto;
  );

  
  instance.show();
  instance.close();
  
}


// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();