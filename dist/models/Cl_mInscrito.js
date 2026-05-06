import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mInscrito extends Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNac, tipoCurso) {
        super(nombre, apellido, cedula, sexo, fechaNac);
        this._tipoCurso = 0;
        this.tipoCurso = tipoCurso;
    }
    get tipoCurso() { return this._tipoCurso; }
    set tipoCurso(v) { this._tipoCurso = v; }
    inversionBase() {
        if (this._tipoCurso === 1)
            return 20;
        if (this._tipoCurso === 2)
            return 25;
        return 30;
    }
    descuentoMenorEdad() {
        if (this.edad() < 18)
            return this.inversionBase() * 0.2;
        return 0;
    }
    descuento3raEdad() {
        const e = this.edad();
        if (this.sexo === "F" && e > 50)
            return this.inversionBase() * 0.4;
        if (this.sexo === "M" && e > 60)
            return this.inversionBase() * 0.4;
        return 0;
    }
    inversion() {
        return this.inversionBase() - this.descuentoMenorEdad() - this.descuento3raEdad();
    }
}
