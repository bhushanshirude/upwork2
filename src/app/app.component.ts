import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { httpService } from 'httpservice';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userData: any = 0;
  private profileImg ;
  constructor(private HttpService: httpService, private router: Router, private cdr: ChangeDetectorRef) 
  {
    this.profileImg ="http://localhost:8080/profile/136109765.jpg";
    this.userData=JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log("=======personalDetails========",this.userData)
    this.router.events
      .subscribe(resp => {
        this.userData = localStorage.getItem("user");
        if (this.userData) {
          this.userData = JSON.parse(this.userData);
          return true;
        }
        this.userData != 0;
        return false;
      })
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.clear();
    this.router.navigate(['home'])
  }
}
