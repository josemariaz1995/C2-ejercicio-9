/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import personajes from "./personajes.js";

for (const personaje of personajes) {
  console.log(personaje);
  const nombre = personaje.nombre;

  const padreDelMolde = document.querySelector(".personajes");
  const moldePersonajes = document.querySelector(".personaje-dummy");
  const molde = moldePersonajes.cloneNode(true);
  const emoji = molde.querySelector(".emoji");
  const imagenPersonaje = molde.querySelector(".card-img-top");
  imagenPersonaje.src = `img/${nombre.toLowerCase()}.jpg`;
  molde.classList.remove("personaje-dummy");
  console.log(molde);
  padreDelMolde.append(molde);
}
