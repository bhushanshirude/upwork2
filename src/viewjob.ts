import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'viewjob.html'
})

export class ViewComponent implements OnInit {
    private userData;
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
        console.log("========sssssssss========",this.userData)
    }
    ngOnInit() {}

}