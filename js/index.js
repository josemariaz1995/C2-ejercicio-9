/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import Asesor from "../datos/Asesor.js";
import Escudero from "../datos/Ecudero.js";
import Luchador from "../datos/Luchador.js";
import Rey from "../datos/Rey.js";
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
  const nombrePersonaje = molde.querySelector(".nombre")

  const imagenMensaje = document.querySelector(".comunicaciones > img");

  const imagenTarjeta = `img/${nombre.toLowerCase()}.jpg`;

  if (personaje instanceof Luchador){
   emoji.textContent = String.fromCodePoint(0x2694)
  }
  else if(personaje instanceof Rey){
    emoji.textContent = String.fromCodePoint(0x1f451)
  }
   else if(personaje instanceof Asesor){
    emoji.textContent = String.fromCodePoint(0x1f393)
  }
   else {emoji.textContent = String.fromCodePoint(0x0001F6E1)}
  

  nombrePersonaje.textContent = `${nombre} ${personaje.familia}`

  const ocultar = (arrayElemento) => {
    for (const elemento of arrayElemento) {
      elemento.classList.add("d-none");
    }
  };
  const elementoParaOcultar = [morir, emojiVivo];
  emojiMuerto.classList.add("d-none");
  morir.addEventListener("click", () => {
    personaje.morir();
    imagenPersonaje.classList.add("muerto");
    ocultar(elementoParaOcultar);
    emojiMuerto.classList.remove("d-none");
  });

  hablar.addEventListener("click", () => {
    comunicacion.classList.add("on");
    fraseComunicaion.textContent = personaje.comunicar();
    imagenMensaje.src = imagenTarjeta;
    setTimeout(() => {
      comunicacion.classList.remove("on");
    }, 2000);
  });
  imagenPersonaje.src = imagenTarjeta;
  molde.classList.remove("personaje-dummy");
  console.log(molde);
  padreDelMolde.append(molde);
}
