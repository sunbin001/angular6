import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit , OnChanges, OnDestroy, AfterViewInit{
  public cardName: string;
  public contents: any;
  public holder: string;
  private privateProperty: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
   console.log("landing page");
   this.cardName = "we are family";
   this.contents = ["content1", "content2", "content3"];
   this.holder = 'David';
   this.privateProperty = "test value";
  }

  ngOnChanges() {
  	this.logIt(`ngOnChanges`);
  }

  ngAfterViewInit() {
    this.logIt(`ngAfterViewInit`);
  }

  ngOnDestroy () {
  	this.logIt(`onDestroy`);
  }
  
  goToPhoneNumberPage() {
    this.router.navigate(['/phoneNumber']);
  }

  alert () {
    alert(this.holder);
  }

  show() {
    alert(this.privateProperty);
  }

  private logIt(msg: string) {
    console.log(msg);
  }
}
