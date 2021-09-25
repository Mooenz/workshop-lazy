/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from "./lazy";

const CONTAINER_IMAGES = document.querySelector(".images");
const CONTAINER_CONTENT = document.querySelector(".container_content");

const MAX = 122;
const MIN = 1;

const numberRandom = () => Math.floor(Math.random() * (MIN - MAX) + MAX);


function renderImages() {
  const contenedor = document.createElement("div");
  contenedor.classList = "m-4 bg-gray-300";
  contenedor.width = 400;
  contenedor.height = 300;

  const image = document.createElement("img");
  image.dataset.src = `https://randomfox.ca/images/${numberRandom()}.jpg`;
  image.classList = "mx-auto";
  image.alt = "img random";
  image.width = 400;
  image.height = 300;


  contenedor.append(image);

  registerImage(image);

  createImage += 1;
  showMessage();
  
  CONTAINER_IMAGES.append(contenedor);
}

function click(ev) {
  const target = ev.target.id;
  if (target === "add") {
    renderImages();
  } else if (target === "clear") {
    console.log(target);
  }
}

CONTAINER_CONTENT.addEventListener("click", click);
