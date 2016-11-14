import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html"
})
export class ListaContactosComponent {
    // Se usa el decorador Input para indicar que espera la lista,
    // la cuál se está indicando cuando se declara el selector (<lista-contactos [contactos]="listaContactos">)
    @Input() contactos: Contacto[];
    @Output() seleccionado: EventEmitter<Contacto> = new EventEmitter();

    notificarContactoSeleccionado(contacto: Contacto): void {
        this.seleccionado.emit(contacto);
    }
}