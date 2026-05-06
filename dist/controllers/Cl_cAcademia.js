import Cl_mAcademia from "../models/Cl_mAcademia.js";
import Cl_mInscrito from "../models/Cl_mInscrito.js";
import Cl_cInscrito from "./Cl_cInscrito.js";
export default class Cl_cAcademia {
    constructor(vistaAcademia, vistaInscrito) {
        this.academia = new Cl_mAcademia();
        this.vistaPrincipal = vistaAcademia;
        this.controladorInscrito = new Cl_cInscrito(vistaInscrito);
        this.vistaPrincipal.onNuevoInscrito(() => this.procesarInscrito());
        this.cargarDatosIniciales();
        this.actualizarVista();
    }
    procesarInscrito() {
        this.controladorInscrito.solicitarInscrito((inscrito) => {
            if (inscrito !== null) {
                this.academia.procesarInscrito(inscrito);
                this.actualizarVista();
            }
        });
    }
    actualizarVista() {
        this.vistaPrincipal.reportarEstadisticas(this.academia.totalRecaudado(), this.academia.cantIngles(), this.academia.cantComputacion(), this.academia.cantIA(), this.academia.porcIngles(), this.academia.porcComputacion(), this.academia.porcIA(), this.academia.cantMenorEdad(), this.academia.cantAdulto(), this.academia.cantTerceraEdad(), this.academia.porcMenorEdad(), this.academia.porcAdulto(), this.academia.porcTerceraEdad(), this.academia.cantMayoresEdad(), this.academia.promedioEdad(), this.academia.totalDescuentoMenor(), this.academia.totalDescuento3ra());
    }
    cargarDatosIniciales() {
        const datos = [
            ["Ana", "Gil", "8888", "F", "2011-06-15", 2],
            ["Mery", "Paz", "6666", "F", "1999-07-25", 2],
            ["Juan", "Sanz", "9999", "M", "1980-09-20", 3],
            ["Paty", "Ortiz", "3333", "F", "1970-05-14", 2],
            ["Liz", "Ramos", "2222", "F", "2015-01-03", 1],
            ["Raul", "Mendez", "5555", "M", "1995-10-11", 2],
            ["Tony", "Flores", "7777", "M", "1999-08-07", 3],
            ["Gaby", "Lopez", "1111", "F", "1966-07-19", 1]
        ];
        for (const d of datos) {
            const inscrito = new Cl_mInscrito(d[0], d[1], d[2], d[3], new Date(d[4]), d[5]);
            this.academia.procesarInscrito(inscrito);
            const vistaIns = this.controladorInscrito["vista"];
            vistaIns.agregarAFila(inscrito.nombre, inscrito.apellido, inscrito.cedula, inscrito.sexo, inscrito.fechaNac.toISOString().split('T')[0], inscrito.edad(), inscrito.tipoCurso, inscrito.inversionBase(), inscrito.descuentoMenorEdad(), inscrito.descuento3raEdad(), inscrito.inversion());
        }
    }
}
