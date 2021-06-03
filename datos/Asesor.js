/* eslint-disable import/extensions */
import Personajes from "./Personajes.js";
import Luchador from "./Luchador.js";
import Rey from "./Rey.js";
import Escudero from "./Ecudero.js";

export default class Asesor extends Personajes {
  arma;

  asesoriamiento;

  constructor(nombre, familia, edad, arma, personajeSirve) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (personajeSirve instanceof Personajes) {
      this.personajeAlQueSirve = personajeSirve;
    }
  }

  comunicar() {
    return `${super.comunicar()} "No sé por qué, pero creo que voy a morir pronto`;
  }
}
