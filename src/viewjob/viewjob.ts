import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'viewjob.html'
})

export class ViewComponent implements OnInit {
    private userData;
    private flag = "viewpost";
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
    }
    ngOnInit() { }
    
    view(name) {
        let baseUrl = "home/viewjob/";
        this.flag = name;
        this.router.navigateByUrl(baseUrl + name);
    }
}