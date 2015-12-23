/**
 * Created by Administrator on 2015/12/23.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
         <h2>{{myHero.name}} details!</h2>`
})

interface Hero {
    id:number;
    name:string;
}

export class AppComponent {

    title:string;
    public myHero:Hero = {
        id: 1,
        name: 'Jackey'
    }

    constructor() {
        this.title = 'Tour of Heroes';

    }

}