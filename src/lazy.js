const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const image = entry.target;
  const url = image.dataset.src;
  //carga la image
  image.src = url;
  console.log(url)
  //deje de observar ya que se cunplio con el objetivo
  observation.unobserve(image);

  imageLoad += 1;
  return showMessage();
};

const observation = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observation.observe(image);
};

/**
 * 1. Colocar un recuadro gris antes de cargar la imagen
 * 2. boton al limpiar eline todo el html de las imagenes
 * 3. reporte del total de imagenes que se han creado y el total de imagenes que se han cargado
 */
