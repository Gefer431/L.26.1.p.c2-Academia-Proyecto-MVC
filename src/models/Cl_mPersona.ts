export default class Cl_mPersona {
    private _nombre: string = "";
    private _apellido: string = "";
    private _cedula: string = "";
    private _sexo: string = "";
    private _fechaNac: Date = new Date();

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNac: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = fechaNac;
    }

    get nombre(): string { return this._nombre; }
    set nombre(v: string) { this._nombre = v; }
    get apellido(): string { return this._apellido; }
    set apellido(v: string) { this._apellido = v; }
    get cedula(): string { return this._cedula; }
    set cedula(v: string) { this._cedula = v; }
    get sexo(): string { return this._sexo; }
    set sexo(v: string) { this._sexo = v; }
    get fechaNac(): Date { return this._fechaNac; }
    set fechaNac(v: Date) { this._fechaNac = v; }

    edad(fechaRef: Date = new Date(2026, 4, 10)): number {
        let edad = fechaRef.getFullYear() - this.fechaNac.getFullYear();
        const mesDiff = fechaRef.getMonth() - this.fechaNac.getMonth();
        if (mesDiff < 0 || (mesDiff === 0 && fechaRef.getDate() < this.fechaNac.getDate())) edad--;
        return edad;
    }
}