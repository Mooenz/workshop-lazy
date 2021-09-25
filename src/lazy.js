let createImage = 0,
  imageLoad = 0;

const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const image = entry.target;
  const url = image.dataset.src;
  //carga la image
  image.src = url;
  //deje de observar ya que se cunplio con el objetivo
  observation.unobserve(image);
  image.onload = () => { 
    imageLoad += 1;
    showMessage();
  }
};

const observation = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observation.observe(image);  
  createImage += 1;
  showMessage(); 
};

export const clear = (nodoContainerImages) => {
  nodoContainerImages.innerHTML="";
  createImage = 0,
  imageLoad = 0;
}

function showMessage() {
  return console.log(`
            🔵 Total de imagenes: ${createImage}
            🟡 Imagenes cargadas: ${imageLoad}
            ${"-".repeat(50)}
          `);
};

/**
 * 1. Colocar un recuadro gris antes de cargar la imagen
 * 2. boton al limpiar eline todo el html de las imagenes
 * 3. reporte del total de imagenes que se han creado y el total de imagenes que se han cargado
 */
