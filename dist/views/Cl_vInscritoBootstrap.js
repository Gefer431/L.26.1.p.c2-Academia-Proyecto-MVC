export default class Cl_vInscritoBootstrap {
    constructor() {
        this.inNombre = document.getElementById("inscrito_nombre");
        this.inApellido = document.getElementById("inscrito_apellido");
        this.inCedula = document.getElementById("inscrito_cedula");
        this.inSexo = document.getElementById("inscrito_sexo");
        this.inFechaNac = document.getElementById("inscrito_fechaNac");
        this.inTipoCurso = document.getElementById("inscrito_tipoCurso");
        this.btnAceptar = document.getElementById("inscrito_btnAceptar");
        this.btnCancelar = document.getElementById("inscrito_btnCancelar");
        this.mensajeDiv = document.getElementById("mensaje");
        this.tablaBody = document.getElementById("tabla-inscritos-body");
        const modalElem = document.getElementById("modal-inscrito");
        this.modal = new bootstrap.Modal(modalElem);
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento() { return this.inFechaNac.value; }
    get tipoCurso() { return +this.inTipoCurso.value || 0; }
    onAceptar(callback) { this.btnAceptar.onclick = callback; }
    onCancelar(callback) { this.btnCancelar.onclick = callback; }
    mostrar() {
        this.limpiarFormulario();
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
    limpiarFormulario() {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNac.value = "";
        this.inTipoCurso.value = "";
        this.mostrarMensaje("");
    }
    mostrarMensaje(texto) {
        if (this.mensajeDiv)
            this.mensajeDiv.textContent = texto;
    }
    agregarAFila(nombre, apellido, cedula, sexo, fechaNac, edad, tipoCurso, inversionBase, descuentoMenorEdad, descuento3raEdad, inversion) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cedula}</td>
            <td>${sexo}</td>
            <td>${fechaNac}</td>
            <td>${edad}</td>
            <td>${tipoCurso}</td>
            <td>${inversionBase}</td>
            <td>${descuentoMenorEdad}</td>
            <td>${descuento3raEdad}</td>
            <td>${inversion}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}
