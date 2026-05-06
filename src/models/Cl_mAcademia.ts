import Cl_mInscrito from "./Cl_mInscrito.js";

export default class Cl_mAcademia {
    private recaudadoTotal: number = 0;
    private cntIngles: number = 0;
    private cntComputacion: number = 0;
    private cntIA: number = 0;
    private cntMenorEdad: number = 0;
    private cntAdulto: number = 0;
    private cntTerceraEdad: number = 0;
    private inscritosTotal: number = 0;
    private acEdades: number = 0;
    private cntMayoresEdad: number = 0;
    private acDescuentoMenor: number = 0;
    private acDescuento3ra: number = 0;

    procesarInscrito(ins: Cl_mInscrito): void {
        const pago = ins.inversion();
        this.recaudadoTotal += pago;
        this.inscritosTotal++;
        const edad = ins.edad();
        this.acEdades += edad;
        if (edad >= 18) this.cntMayoresEdad++;

        this.acDescuentoMenor += ins.descuentoMenorEdad();
        this.acDescuento3ra += ins.descuento3raEdad();

        switch (ins.tipoCurso) {
            case 1: this.cntIngles++; break;
            case 2: this.cntComputacion++; break;
            case 3: this.cntIA++; break;
        }

        if (edad < 18) this.cntMenorEdad++;
        else if (ins.sexo === "F" && edad > 50) this.cntTerceraEdad++;
        else if (ins.sexo === "M" && edad > 60) this.cntTerceraEdad++;
        else this.cntAdulto++;
    }

    totalRecaudado(): number { return this.recaudadoTotal; }
    cantIngles(): number { return this.cntIngles; }
    cantComputacion(): number { return this.cntComputacion; }
    cantIA(): number { return this.cntIA; }
    cantMenorEdad(): number { return this.cntMenorEdad; }
    cantAdulto(): number { return this.cntAdulto; }
    cantTerceraEdad(): number { return this.cntTerceraEdad; }
    totalInscritos(): number { return this.inscritosTotal; }
    cantMayoresEdad(): number { return this.cntMayoresEdad; }
    totalDescuentoMenor(): number { return this.acDescuentoMenor; }
    totalDescuento3ra(): number { return this.acDescuento3ra; }

    porcIngles(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntIngles / this.inscritosTotal) * 100;
    }
    porcComputacion(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntComputacion / this.inscritosTotal) * 100;
    }
    porcIA(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntIA / this.inscritosTotal) * 100;
    }
    porcMenorEdad(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntMenorEdad / this.inscritosTotal) * 100;
    }
    porcAdulto(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntAdulto / this.inscritosTotal) * 100;
    }
    porcTerceraEdad(): number {
        return this.inscritosTotal === 0 ? 0 : (this.cntTerceraEdad / this.inscritosTotal) * 100;
    }
    promedioEdad(): number {
        return this.inscritosTotal === 0 ? 0 : this.acEdades / this.inscritosTotal;
    }
}