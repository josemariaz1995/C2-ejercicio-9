/* eslint-disable import/extensions */
import Personajes from "./Personajes.js";

// eslint-disable-next-line import/prefer-default-export
export class Rey extends Personajes {
  añosDeReinado;

  constructor(nombre, familia, edad, añosDeReinado) {
    super(nombre, familia, edad);
    this.añosDeReinado = añosDeReinado;
  }

  comunicar() {
    return `${super.comunicar()} "Vais a morir todos`;
  }
}
