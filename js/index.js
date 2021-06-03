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
  const comunicacion = document.querySelector(".comunicaciones");
  const fraseComunicaion = document.querySelector(".frase");
  const hablar = molde.querySelector(".accion:first-child");
  const morir = molde.querySelector(".accion:nth-child(2)");
  const emojiVivo = molde.querySelector(".estado:nth-child(2)");
  const emojiMuerto = molde.querySelector(".estado:first-child");

  emojiMuerto.classList.add("d-none");
  morir.addEventListener("click", () => {
    personaje.morir();
    imagenPersonaje.classList.add("muerto");
    morir.classList.add("d-none");
    emojiVivo.classList.add("d-none");
    emojiMuerto.classList.remove("d-none");
  });

  const ocultarIconosEstado = (estado, Personaje) => {
    const emoji = estado.querySelector(".emoticonoMuerto");
  };
  hablar.addEventListener("click", () => {
    comunicacion.classList.add("on");
    fraseComunicaion.textContent = personaje.comunicar();
    setTimeout(() => {
      comunicacion.classList.remove("on");
    }, 2000);
  });
  imagenPersonaje.src = `img/${nombre.toLowerCase()}.jpg`;
  molde.classList.remove("personaje-dummy");
  console.log(molde);
  padreDelMolde.append(molde);
}
