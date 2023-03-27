import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

galleryEL.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src= "${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");

galleryEL.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.currentTarget === evt.target) return;

  evt.target.src = evt.target.dataset.source;
  const instance = basicLightbox.create(`${evt.target.parentNode.innerHTML}`);
  instance.show();

  window.addEventListener("keydown", onEscClick);

  function onEscClick(evt) {
    console.log(evt.code);

    if (evt.code !== "Escape") return;
    instance.close();
    window.removeEventListener("keydown", onEscClick);
  }
}
