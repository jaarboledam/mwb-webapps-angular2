import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Pipe({
    name: 'Ordenar'
})
export class OrdenarPipe implements PipeTransform {

    // Con 'transform()' hacemos la transformación del dato de origen. Pero este dato no se altera
    // sino que se utiliza como fuente de datos
    transform(contactos: Contacto[], orden: string): Contacto[] {

        return contactos.sort((contacto1: Contacto, contacto2: Contacto): number => {

            let nombreCompleto1: string = `${contacto1.nombre} ${contacto1.apellidos}`;
            let nombreCompleto2: string = `${contacto2.nombre} ${contacto2.apellidos}`;

            // Si el nombre del contacto 1 va primero
            if (nombreCompleto1 > nombreCompleto2)
                return orden === "asc" ? 1 : -1;
            // Si el nombre del contacto 2 va primero
            else if (nombreCompleto1 <= nombreCompleto2)
                return orden === "desc" ? 1 : -1;
            // Si se ordenan igual 
            else 
                return 0; 
        });
    }
}