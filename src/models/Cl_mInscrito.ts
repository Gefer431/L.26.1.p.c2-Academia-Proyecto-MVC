import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mInscrito extends Cl_mPersona {
    private _tipoCurso: number = 0;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNac: Date, tipoCurso: number) {
        super(nombre, apellido, cedula, sexo, fechaNac);
        this.tipoCurso = tipoCurso;
    }

    get tipoCurso(): number { return this._tipoCurso; }
    set tipoCurso(v: number) { this._tipoCurso = v; }

    inversionBase(): number {
        if (this._tipoCurso === 1) return 20;
        if (this._tipoCurso === 2) return 25;
        return 30;
    }

    descuentoMenorEdad(): number {
        if (this.edad() < 18) return this.inversionBase() * 0.2;
        return 0;
    }

    descuento3raEdad(): number {
        const e = this.edad();
        if (this.sexo === "F" && e > 50) return this.inversionBase() * 0.4;
        if (this.sexo === "M" && e > 60) return this.inversionBase() * 0.4;
        return 0;
    }

    inversion(): number {
        return this.inversionBase() - this.descuentoMenorEdad() - this.descuento3raEdad();
    }
}