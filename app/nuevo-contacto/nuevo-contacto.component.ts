import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    template: `
        <h2>Nuevo contacto</h2>
        <!-- Formulario de alta de contactos -->
        <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
    `
})
export class NuevoContactoComponent { 

    // Usando el modificador de acceso en un parámetro del constructor, hacemos
    // que TypeScript lo añada como atributo a la instancia que se crea. Así es
    // como hacemos la inyección de dependencias en Angular.
    constructor(
        private _contactosService: ContactosService,
        private _router: Router) {}

    // Almacenamos el contacto indicado
    guardarContacto(contacto: Contacto): void {
        this._contactosService.guardarContacto(contacto)
                              .subscribe(contacto => this._router.navigate(['/mis-contactos']));
    }
}