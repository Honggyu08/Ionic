import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.page.html',
  styleUrls: ['./my-page.page.scss'],
})
export class MyPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bluetoothPage() {
    this.router.navigate(['/bluetooth']);
  }

  goSetting() {
    this.router.navigate(['/my-page/setting']);
  }
}
