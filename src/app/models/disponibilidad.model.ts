import { Time } from "@angular/common";
import { Ciclo } from "./ciclo.model";
import { Usuario } from "./usuario.model";

export class Disponibilidad {
    idDisponibilidad?: number;
    horaInicio?: number;
    horaFin?: number;
    dia?: string;
    ciclo?: Ciclo;
    usuario?: Usuario;
}
