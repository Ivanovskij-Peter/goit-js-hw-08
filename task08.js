import images from "./galary.js";
const refs = {
  galaryList: document.querySelector(".gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector('[data-action="close - lightbox"]'),
};

const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement("img");

  img.classList.add(".gallery__image");
  img.src = preview;
  img.dataset.source = original;
  img.alt = description;
  parent.appendChild(img);
};
const createLink = (item, parent) => {
  const { original } = item;
  const a = document.createElement("a");
  a.classList.add(".gallery__link");
  a.href = original;

  createImage(item, a);
  parent.appendChild(a);
};
const createItem = (item) => {
  const liRef = document.createElement("li");
  liRef.classList.add(".gallery__item");
  createLink(item, liRef);
  return liRef;
};
const itemList = (arr) => {
  const items = arr.map((item) => createItem(item));
  refs.galaryList.append(...items);
};
itemList(images);

function onClickHandler(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightbox.querySelector(".lightbox__image").src = event.target.src;
    refs.lightbox.querySelector(".lightbox__image").alt = event.target.alt;
  }
}
function onCloseHandler(event) {
  if (event.target.nodeName === "I" || event.target.nodeName === "BUTTON") {
    refs.lightbox.classList.remove("is-open");
  }
}
refs.galaryList.addEventListener("click", onClickHandler);
refs.btn.addEventListener("click", onCloseHandler);
