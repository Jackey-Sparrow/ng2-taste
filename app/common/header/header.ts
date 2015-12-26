/**
 * Created by Jackey on 2015/12/24.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'header-component',
    template:`
        <div class='header-container'>
            <ul>
                <li><a  class="logo"><img/></a></li>
                <li class="nav-tab active"><a >Home</a></li>
                <li class="nav-tab"><a >About</a></li>
            </ul>
        </div>
        `
})

export class HeaderComponent{}