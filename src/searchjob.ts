import {Component, OnInit}from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';

@Component({
    selector:'app-home',
    templateUrl:'searchjob.html'
})
export class SearchComponent implements OnInit{
    private userData;
    private classList:any;
    private toggle:any;

    constructor(private HttpService :httpService ,private router:Router){
        this.userData = JSON.parse(localStorage.getItem("user"));   
}
    ngOnInit(){}

    clicks(x){       
        console.log("===========================Dipu==============",x)
        //  x.classList.toggle("fa fa-star");
    }
}