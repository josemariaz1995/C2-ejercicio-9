/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import Personajes from "./Personajes.js";
// eslint-disable-next-line import/prefer-default-export
export class Luchador extends Personajes {
  destreza;
  arma;
  constructor(nombre, familia, edad, arma, valorDestreza) {
    super(nombre, familia, edad, valorDestreza);
    this.arma = arma;

    this.destreza = this.filtraDestreza(valorDestreza);
  }

  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto`;
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    } else if (valorDestreza > 10) {
      return 10;
    } else {
      return valorDestreza;
    }
  }
}
