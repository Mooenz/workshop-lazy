/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage, clear } from "./lazy.js";

const CONTAINER_IMAGES = document.querySelector(".images");
const CONTAINER_CONTENT = document.querySelector(".container_content");

const MAX = 12200;
const MIN = 1000;

const numberRandom = () => Math.floor(Math.random() * (MIN - MAX) + MAX);

function renderImages() {
  const contenedor = document.createElement("div");
  contenedor.classList = "flex justify-center";

  const bg_load = document.createElement("div");
  bg_load.classList = "bg-gray-300 min-h-300";

  const image = document.createElement("img");
  image.alt = "img random";
  image.width = 400;
  image.height = 300;
  image.dataset.src = `https://source.unsplash.com/random/300x200?sig=${numberRandom()}`;

  bg_load.append(image);
  contenedor.append(bg_load);

  registerImage(image);
  return contenedor;
}

function click(ev) {
  const target = ev.target.id;
  if (target === "add") {
    const newImage = renderImages();
    CONTAINER_IMAGES.append(newImage);
  } else if (target === "clear") {
    clear(CONTAINER_IMAGES);
  }
}

CONTAINER_CONTENT.addEventListener("click", click);
