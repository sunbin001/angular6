import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-number-verify',
  templateUrl: './phone-number-verify.component.html',
  styleUrls: ['./phone-number-verify.component.css']
})
export class PhoneNumberVerifyComponent implements OnInit {
 public phoneNumber: string = "";
 public passwrodNumber:string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.phoneNumber =  this.activatedRoute.snapshot.queryParams["phoneNumber"];
   }

  ngOnInit() {
  }

  goToLogon() {
    this.router.navigate(['contact-list'])
  }
}
