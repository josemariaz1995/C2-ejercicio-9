/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import Personajes from "../Personajes.js";
import Luchador from "../Luchador.js";
import Rey from "../Rey.js";
import Escudero from "../Ecudero.js";

const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");
const daenerys = new Luchador("Daenerys", "Lannister", 40, "guantazo");
const joffrey = new Rey("Joffrey", "Baratheon", 17, 3);
const bronn = new Escudero("Bronn", "NuNAFamily", 78);
const tyrion = new Asesor("Tyrion", "Lannister", 36, "ballesta");
const tywin = new Asesor("Tywin", "Lannister", 89, "ninguna");

export const personajes = [tyrion, tywin, joffrey, jaime, daenerys, bronn];
