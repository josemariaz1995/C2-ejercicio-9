/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
// eslint-disable-next-line import/prefer-default-export
export class Personajes {
  nombre;
  familia;
  edad;
  serie = "Juego de Tronos";
  vivo = true;
  mensaje;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  morir() {
    this.vivo = false;
  }

  comunicar() {
    return `${this.nombre} dice:`;
  }
}
