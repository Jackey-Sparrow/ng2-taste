/**
 * Created by Administrator on 2015/12/23.
 */
import {Component} from 'angular2/core';

interface Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
         <h2>{{myHero.name}} details!</h2>`
})

export class AppComponent {

    title:string;
    myHero:Hero;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = {
            id: 1,
            name: 'Jackey'
        };
    }

}