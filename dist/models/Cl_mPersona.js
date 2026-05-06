export default class Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNac) {
        this._nombre = "";
        this._apellido = "";
        this._cedula = "";
        this._sexo = "";
        this._fechaNac = new Date();
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }
    get nombre() { return this._nombre; }
    set nombre(v) { this._nombre = v; }
    get apellido() { return this._apellido; }
    set apellido(v) { this._apellido = v; }
    get cedula() { return this._cedula; }
    set cedula(v) { this._cedula = v; }
    get sexo() { return this._sexo; }
    set sexo(v) { this._sexo = v; }
    get fechaNac() { return this._fechaNac; }
    set fechaNac(v) { this._fechaNac = v; }
    edad(fechaRef = new Date(2026, 4, 10)) {
        let edad = fechaRef.getFullYear() - this.fechaNac.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNac.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNac.getDate()))
            edad--;
        return edad;
    }
}
