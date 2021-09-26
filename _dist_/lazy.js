//se encargaran de llevar el conteo de imagenes creadas y cargadas
let createImage = 0,
  imageLoad = 0;

const isIntersecting = (entry) => {
  //Retorna un boleano si sirve
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  //El image que tiene el observador
  const image = entry.target;
  //Sacamos la url del dataset
  const url = image.dataset.src;
  //Cargamos la imagen
  image.src = url;
  //Dejamos de observar la imagen
  observation.unobserve(image);
  //Aumentamos el contador de imagenes interceptadas
  imageLoad += 1;
  //Mostramos los contadores
  showMessage();
};

//Guardamos una instancia del observador, recibe por parametro un cb y este a a subes recibe un elemento que será observado.
const observation = new IntersectionObserver((entries) => {
  entries
  //Filtramos el boleano si se ha generado una intersepcion
  .filter(isIntersecting)
  //Realizamos una accion por cada elemento que se esta interceptando
  .forEach(loadImage);
});

//Otorgarle el observador a las imagenes
export const registerImage = (image) => {
  //Le decimos a la instacia del observador que observe el elemento enciado
  observation.observe(image);
  //Aumentamos el contador de imagenes creadas
  createImage += 1;
  //Mostramos los contadores
  showMessage();
};

//Funcion que sobre escribe los nodos hijos
export const clear = (nodoContainerImages) => {
  nodoContainerImages.innerHTML = "";
  (createImage = 0), (imageLoad = 0);
};

//Funcion que muestra los contadores
function showMessage() {
  return console.log(`
    🛸 Total de imagenes: ${createImage}
    🚀 Imagenes cargadas: ${imageLoad}
  ${"-".repeat(50)}
  `);
}
