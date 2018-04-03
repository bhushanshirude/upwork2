import { Component, OnInit ,ValueProvider } from '@angular/core';
import { Http } from '@angular/http';
import { TestComponent } from 'test.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Options } from 'selenium-webdriver';


@Component({
    selector: 'app-home',
    templateUrl: 'question.html'
})
export class QuesComponent implements OnInit {
    private questions: any;
    // private question: any =0;
    private testId;
    private CurrentQuestion:any;
    private index = 0;
    private total:any =0;
    private userAns:'';
    private btnFlag: any=0;
    private flag:any =0;

    constructor(private http: Http, private route: ActivatedRoute) {
        this.route.params.subscribe((v: any) => {
            if (v._id)
                this.testId = v._id
        })
        // alert('bhushan');
        console.log(this.testId);
    }
    ngOnInit() {
        // alert('Amol');
        this.http.get('data/data.json').map(response => response.json().tests).subscribe(data => {
        this.questions = data.find((q) => q._id === this.testId).questions;
        })

    }

    updateCurrentQuestion() {
        if (this.index <= this.questions.length - 1) {
            if (this.questions[this.index].correctOptionIndex == this.userAns) {
                // console.log("====true====>", this.questions[this.index].correctOptionIndex == this.userAns)
                this.total++;
            }
            if (this.index == this.questions.length - 1) {
                this.btnFlag = '1';
            } else {
                this.index++;
            }
        }
    }
    
    SaveOption(optionName) {
        this.userAns = optionName;

    }
    endTest() {

        if (this.userAns) {
        }
        this.flag = 1;


    }
}