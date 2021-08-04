import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goPage() {
    this.router.navigate(['/basic-survey']);
  }
  // 클릭시 basic-survey 페이지로 이동하는 함수

  myPage() {
    this.router.navigate(['/my-page']);
  }
  // 클릭시 my-page로 이동하는 함수
}
