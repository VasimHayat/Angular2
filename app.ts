/*
 import {Component, bootstrap,FORM_DIRECTIVES} from 'angular2/angular2';
 @Component({
 selector: 'my-app',
 templateUrl:'app.html',
 directives: [FORM_DIRECTIVES]
 })
 class AppComponent {
 public title = "Tour of Heros";
 public hero : Hero = {
 id : 12,
 name : "windstome"
 };
 }
 class Hero{
 id:number;
 name:string;
 }
 bootstrap(AppComponent);
 */

import {Component,bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template : '<div>{{message}} this is my first Angular2 App.</div>'
})

class AppComponent{
   public message = "Hellow";
}

bootstrap(AppComponent);
