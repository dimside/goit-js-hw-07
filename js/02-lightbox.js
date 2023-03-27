import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

galleryEL.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

galleryEL.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.currentTarget === evt.target) return;

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
