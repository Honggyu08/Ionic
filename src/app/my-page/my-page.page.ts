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

  goSetting() {
    this.router.navigate(['/my-page/setting']);
  }

  goProfile() {
    this.router.navigate(['/my-page/profile']);
  }

  reviewClick() {
    this.router.navigate(['/my-page/my-reviews/review']);
  }

  ideaClick() {
    this.router.navigate(['/my-page/my-reviews/idea']);
  }

  diaryClick() {
    this.router.navigate(['/my-page/my-reviews/diary']);
  }

  pointClick() {
    this.router.navigate(['/my-page/points']);
  }

  purchaseClick() {
    this.router.navigate(['/my-page/purchase']);
  }

  refundClick() {
    this.router.navigate(['/my-page/refund']);
  }
}
