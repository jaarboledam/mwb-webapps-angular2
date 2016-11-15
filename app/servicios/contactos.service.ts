import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class ContactosService {

    constructor(private _http: Http){}

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
    obtenerContactos(): Observable<Contacto[]> {
        return this._http
                   .get("http://localhost:3004/contactos")
                   .map(respuesta => {
                       // Creamos una colección de objetos Contacto vacía
                       let contactos: Contacto[] = [];
                       // Obtenemos el cuerpo de la respuesta en formato JSON
                       let json = respuesta.json();
                       // Iteramos por los objetos del JSON
                       json.forEach(contacto => {
                           // Por cada uno de ellos, creamos una instancia de Contacto
                           contactos.push(Contacto.nuevoDesdeJSON(contacto));
                       });
                       // Retornamos la colección
                       return contactos;
                   });
    }

    // Guardamos el contacto indicado en la lista
    guardarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                   .post("http://localhost:3004/contactos", contacto)
                   .map(respuesta => {
                       // Obtenemos el cuerpo de la respuesta en formato JSON
                       let json = respuesta.json();
                       // Por cada uno de ellos, creamos una instancia de Contacto
                       return Contacto.nuevoDesdeJSON(json);
                   });
    } 
}