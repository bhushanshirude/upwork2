import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';

@Component({
    selector: 'app-home',
    templateUrl: 'searchjob.html'
})
export class SearchComponent implements OnInit {
    private userData;
    private toggle: boolean = true;
    private flag="job";
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
    }
    ngOnInit() { }

    clicks() {
        console.log("===========================Dipu==============");
    }

    view(name) {
        let baseUrl = "home/search/";
        this.flag = name;
        this.router.navigateByUrl(baseUrl + name);

    }
}