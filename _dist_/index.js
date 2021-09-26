/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// importamos dos funciones del archivo lazy
import { registerImage, clear } from "./lazy.js";
//Creamos constantes para el contenedor de la imagen y de todas las imagenes
const CONTAINER_IMAGES = document.querySelector(".images");
const CONTAINER_CONTENT = document.querySelector(".container_content");
//Devuelve un numero aleatorio entre el rango de MIN y MAX
const numberRandom = (MAX = 12200, MIN = 1000) => Math.floor(Math.random() * (MIN - MAX) + MAX);
//Crea los nodos
function renderImages() {
  //Crea el elemnto div contenedor de la imagen
  const contenedor = document.createElement("div");
  contenedor.classList = "flex justify-center";
  //Crea otro contenedor con el fin de que contenga un bg gris
  const bg_load = document.createElement("div");
  bg_load.classList = "bg-gray-300 min-h-300";
  //Crea el nodo img con sus atributos correspondientes
  const image = document.createElement("img");
  image.alt = "img random";
  image.width = 470;
  image.height = 300;
  //Atributo que contiene la url de la imagen que posteriormente usaremos
  image.dataset.src = `https://source.unsplash.com/random/300x200?sig=${numberRandom()}`;
  //Crearemos toda la estructura html, contenedor contendra a bg_load y este a su vez a la imagen.
  bg_load.append(image);
  contenedor.append(bg_load);
  //Enviamos la imagen para que sea observada
  registerImage(image);
  //Retornamos todo el elemento
  return contenedor;
}

//Funcion se entraga en el evento click
function click(ev) {
  //El evento enviado con tiene toda la informacion del elemento clickeado y guardamos su ID
  const ID = ev.target.id;
  //Si es true agregamos una nueva imagen
  if (ID === "add") {
    const newImage = renderImages();
    //Le entregamos un nuevo hijo al contenedor hijo
    CONTAINER_IMAGES.append(newImage);
    //Si es true borramos todos los hijos del contenedor de imagenes
  } else if (ID === "clear") {
    clear(CONTAINER_IMAGES);
  }
}

//Captura el evento click
CONTAINER_CONTENT.addEventListener("click", click);
