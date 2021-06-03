/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import personajes from "./personajes.js";

for (const personaje of personajes) {
  const padreDelMolde = document.querySelector(".personajes");
  const moldePersonajes = document.querySelector(".personaje-dummy");
  const clonMolde = moldePersonajes.cloneNode(true);
  clonMolde.classList.remove("personaje-dummy");
  console.log(clonMolde);
}
