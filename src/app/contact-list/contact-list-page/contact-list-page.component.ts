import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.css']
})
export class ContactListPageComponent implements OnInit {
 public userInfo= [];
 public name = '';
  constructor(
    private router: Router,
    private HttpClient: HttpClient
  ) {
}


  ngOnInit() {
    this.HttpClient.get("http://localhost:4000/dummy/contact.json").subscribe((data: any)=> {
      this.userInfo = data.response;
    })
  }
  alertName (name) {
    alert(name)
  }
}
