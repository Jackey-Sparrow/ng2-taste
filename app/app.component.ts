/**
 * Created by Administrator on 2015/12/23.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{myHero}} details!</h2>'
})
export class AppComponent {

    title:string;
    myHero:string;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Jackey';
    }
    
}