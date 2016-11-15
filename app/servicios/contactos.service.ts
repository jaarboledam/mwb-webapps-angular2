import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

    private _contactos: Contacto[] = [
        Contacto.nuevoDesdeJSON({
            id: 1,
            nombre: "Steve",
            apellidos: "Jobs",
            email: "steve.jobs@apple.com",
            telefono: "555123456",
            twitter: "SteveJobs_es",
            facebook: "",
            avatar: ""
        }),
        Contacto.nuevoDesdeJSON({
            id: 2,
            nombre: "Bill",
            apellidos: "Gates",
            email: "bill.gates@microsoft.com",
            telefono: "555987654",
            twitter: "BillGates",
            facebook: "",
            avatar: ""
        }),
        Contacto.nuevoDesdeJSON({
            id: 3,
            nombre: "Elon",
            apellidos: "Musk",
            email: "elon.musk@tesla.com",
            telefono: "555675432",
            twitter: "elonmusk",
            facebook: "",
            avatar: ""
        })
    ];

    // Obtenemos la lista de contactos almacenados
    obtenerContactos(): Contacto[] {
        return this._contactos;
    }

    // Guardamos el contacto indicado en la lista
    guardarContacto(contacto: Contacto): Contacto {
        // Generamos un nuevo id
        let id = this._contactos.length + 1;
        // Lo asignamos al nuevo contacto
        contacto.id = id;
        // Añadimos el nuevo contacto a la colección
        this._contactos.push(contacto);
        // Retornamos el contacto actualizado
        return contacto;
    } 
}