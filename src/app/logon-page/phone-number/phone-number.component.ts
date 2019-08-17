import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  phoneNumber:"";
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  goToOtpCodeVerify() {
    this.router.navigate(['/phoneNumberVerify'],{queryParams:{'phoneNumber':this.phoneNumber}});
  }

  useQQNumberLogOn() {
    this.router.navigate(['/qqNumber']);
  }
}
