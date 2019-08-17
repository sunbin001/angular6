import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  public test: string;
  public name: string;
  constructor(
  ) { 
    console.log(`constructor`);
  }
  
  ngOnInit() {
    this.logIt(`ngOnInit`);
    this.test = 'test string';
  }
  
  ngOnChanges() {
  	this.logIt(`ngOnChanges`);
  }
  
  ngOnDestroy () {
  	this.logIt(`onDestroy`);
  }
  
  private logIt(msg: string) {
    console.log(msg);
  }

  alert() {
    alert('xxx');
  }
}
 