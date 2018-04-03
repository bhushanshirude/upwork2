import {Component ,OnInit}from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector:'app-home',
    templateUrl:'test.html'
})
export class TestComponent implements OnInit{
   types =[];
    constructor(private http :Http){}

    ngOnInit(){
        this.http.get('data/data.json').map(response =>response.json().tests).subscribe(data=>{this.types=(data);}) 
    }
}