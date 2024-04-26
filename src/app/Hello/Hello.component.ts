// importação da classe da  biblioteca do angular 2
import { Component } from "@angular/core";

// Decorator para mostrar que essa classe é um componente do angular 2
@Component({
    // passagem de metadados no component
    // o Seletor é o nome da tag HTML que vai ser utilizada para utilizar esse componente
    selector: 'hello-component',
    template: `
        <p>Meu primeiro component com angular 2</p>
    `
})
export class HelloComponent {

}