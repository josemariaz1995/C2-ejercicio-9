/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import Asesor from "../datos/Asesor.js";
import Escudero from "../datos/Ecudero.js";
import Luchador from "../datos/Luchador.js";
import Rey from "../datos/Rey.js";
import personajes from "./personajes.js";

const creacion = () => {
  const padreDelMolde = document.querySelector(".personajes");
  for (const personaje of personajes) {
    console.log(personaje);
    const nombre = personaje.nombre;

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
    const nombrePersonaje = molde.querySelector(".nombre");
    const imagenMensaje = document.querySelector(".comunicaciones > img");
    const clonarLi = document.querySelector(".dato-personaje");
    const metadata = molde.querySelector(".personaje-overlay .metadata");

    const imagenTarjeta =
      nombre !== "" ? `img/${nombre.toLowerCase()}.jpg` : "img/no-one.jpg";

    if (personaje instanceof Luchador) {
      const arrayDato = [];
      const arma = personaje.arma;
      const destreza = personaje.destreza;
      arrayDato.push(destreza, arma);
      console.log(arrayDato);
      for (const dato of arrayDato) {
        const datosPersonaje = clonarLi.cloneNode();

        datosPersonaje.textContent =
          dato >= 0 ? `destreza: ${dato}` : `arma: ${dato}`;
        metadata.append(datosPersonaje);
      }
      emoji.textContent = String.fromCodePoint(0x2694);
    } else if (personaje instanceof Rey) {
      const arrayDato = [];
      arrayDato.push(personaje["añosDeReinado"]);
      console.log(arrayDato);
      for (const dato of arrayDato) {
        const datosPersonaje = clonarLi.cloneNode();

        datosPersonaje.textContent = `Reinado: ${dato}`;
        metadata.append(datosPersonaje);
      }
      emoji.textContent = String.fromCodePoint(0x1f451);
    } else if (personaje instanceof Asesor) {
      const arrayDato = [];
      const anyoReinado = personaje.añosDeReinado;

      for (const dato of arrayDato) {
        const datosPersonaje = clonarLi.cloneNode();
        datosPersonaje.textContent = dato;
        metadata.append(datosPersonaje);
      }
      emoji.textContent = String.fromCodePoint(0x1f393);
    } else {
      const arrayDato = [];
      const anyoReinado = personaje.añosDeReinado;

      for (const dato of arrayDato) {
        const datosPersonaje = clonarLi.cloneNode();
        datosPersonaje.textContent = dato;
        metadata.append(datosPersonaje);
      }
      emoji.textContent = String.fromCodePoint(0x0001f6e1);
    }

    nombrePersonaje.textContent = `${nombre} ${personaje.familia}`;

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
};
creacion();

/* const metadataPorLi = (metadata, rol) => {
  const elemento = [];

  borrarMetadata(metadata);

  metadata.append(...elemento); */
