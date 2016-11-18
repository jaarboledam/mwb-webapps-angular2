import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html",
    styleUrls: ["./app/lista-contactos/lista-contactos.component.css"]
})
export class ListaContactosComponent {

    orden: string = "asc";
    // Se usa el decorador Input para indicar que espera la lista,
    // la cuál se está indicando cuando se declara el selector (<lista-contactos [contactos]="listaContactos">)
    @Input() contactos: Contacto[];
    @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();

    notificarContactoSeleccionado(contacto: Contacto): void {
        this.seleccionado.emit(contacto);
    }

    // Cambiamos el sentido del orden
    cambiarSentidoOrden(): void {
        this.orden = this.orden === "asc" ? "desc" : "asc";
    }
}