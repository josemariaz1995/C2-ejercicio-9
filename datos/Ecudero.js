/* eslint-disable import/extensions */

import Personajes from "./Personajes.js";
import Luchador from "./Luchador.js";

// eslint-disable-next-line import/prefer-default-export
export class Escudero extends Personajes {
  nivelpelotismo;
  nivelpelotismo = Math.floor(Math.random() * 11);

  constructor(nombre, familia, edad, personajeSirve, valorPelotismo) {
    super(nombre, familia, edad);
    if (personajeSirve instanceof Luchador) {
      this.nivelpelotismo = this.filtrarPelotismo(valorPelotismo);
      this.personajeAlQueSirve = personajeSirve;
    }
  }
  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    } else if (gradoPelotismo > 10) {
      return 10;
    } else {
      return gradoPelotismo;
    }
  }

  comunicar() {
    return `${super.comunicar()} "Soy un Loser`;
  }
}
