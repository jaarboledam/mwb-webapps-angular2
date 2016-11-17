import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './app/formulario-contacto/formulario-contacto.component.html',
    styleUrls: ['./app/formulario-contacto/formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

    rutaAvatar: string = "";

    constructor(private _contactosService: ContactosService){};
    
    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    ngOnInit(): void {
        this._contactosService.generarRutaAvatar()
                              .subscribe(ruta => this.rutaAvatar = ruta);
    }
    
    notificarContacto(formulario: FormGroup): void {
        let contacto: Contacto = Contacto.nuevoDesdeJSON(formulario.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    }
}