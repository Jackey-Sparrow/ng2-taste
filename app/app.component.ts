/**
 * Created by Administrator on 2015/12/23.
 */
import {Component,ngModel} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail-component';

@Component({
    selector: 'my-app',
    template: `
         <h1>{{title}}</h1>
         <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        <h2>heros:</h2>
        <h3 *ngIf="selectedHero">selected hero:{{selectedHero.name}}</h3>
        <ul>
            <li [class.selected]="hero===selectedHero" *ngFor="#hero of heros" (click)="onSelect(hero)">
                <span>{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        `,
    styles: [`
       .selected { background-color: #EEE; color: #369; }
    `],
    directives: [HeroDetailComponent]
})

export class AppComponent {

    title:string;
    heros:Hero[];
    selectedHero:Hero;

    constructor() {
        this.title = 'Tour of Heroes';
        this.heros = [
            {id: 1, name: 'Jackey1'},
            {id: 2, name: 'Jackey2'},
            {id: 3, name: 'Jackey3'},
            {id: 4, name: 'Jackey4'},
            {id: 5, name: 'Jackey5'},
            {id: 6, name: 'Jackey6'},
            {id: 7, name: 'Jackey7'}
        ];
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

}