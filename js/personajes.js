/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import Luchador from "../datos/Luchador.js";
import Rey from "../datos/Rey.js";
import Escudero from "../datos/Ecudero.js";
import Asesor from "../datos/Asesor.js";

const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");
const daenerys = new Luchador("Daenerys", "Lannister", 40, "guantazo");
const joffrey = new Rey("Joffrey", "Baratheon", 17, 3);
const bronn = new Escudero("Bronn", "", 78);
const tyrion = new Asesor("Tyrion", "Lannister", 36, "ballesta");
const tywin = new Asesor("Tywin", "Lannister", 89, "ninguna");
const personajes = [tyrion, tywin, joffrey, jaime, daenerys, bronn];
export default personajes;
