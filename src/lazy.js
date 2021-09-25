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

  imageLoad += 1;
  showMessage();
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
  nodoContainerImages.innerHTML = "";
  (createImage = 0), (imageLoad = 0);
};

function showMessage() {
  return console.log(`
            🔵 Total de imagenes: ${createImage}
            🟡 Imagenes cargadas: ${imageLoad}
            ${"-".repeat(50)}
          `);
}
