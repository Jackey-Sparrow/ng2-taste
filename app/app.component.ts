/**
 * Created by Administrator on 2015/12/23.
 */
import {Component,ngModel} from 'angular2/core';

interface Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'my-app',
    template: `
         <h1>{{title}}</h1>
         <h2>{{myHero.name}} details!</h2>
         <div><label>id:</label>{{myHero.id}}</div>
         <div>
            <label>name:</label>
            <div><input [(ngModel)]="myHero.name" placeholder="name"/></div>
        </div>
        <h2>heros:</h2>
        <ul>
            <li *ngFor="#hero of heros">
                <span>{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        `
})

export class AppComponent {

    title:string;
    myHero:Hero;
    heros:Hero[];

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = {
            id: 1,
            name: 'Jackey'
        };
        this.heros = [
            {id: 1, name: 'Jackey'},
            {id: 2, name: 'Jackey'},
            {id: 3, name: 'Jackey'},
            {id: 4, name: 'Jackey'},
            {id: 5, name: 'Jackey'},
            {id: 6, name: 'Jackey'},
            {id: 7, name: 'Jackey'}
        ];
    }

}