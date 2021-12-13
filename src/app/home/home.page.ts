import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  myPage() {
    this.router.navigate(['/my-page']);
  }
  // 클릭시 my-page로 이동하는 함수

  goSignin() {
    this.router.navigate(['/signin']);
  }
  // 클릭시 로그인 페이지로 이동하는 함수

  goSignup() {
    this.router.navigate(['/signup']);
  } // 클릭시 회원가입 페이지로 이동하는 함수

  goNotice() {
    this.router.navigate(['/notice']);
  }
  // 클릭시 notice 페이지로 이동하는 함수

  goEvent() {
    this.router.navigate(['/event']);
  }

  goReview() {
    this.router.navigate(['/review']);
  }

  goNew() {
    this.router.navigate(['/new']);
  }

  goBest() {
    this.router.navigate(['/best']);
  }

  goQnA() {
    this.router.navigate(['/qn-a']);
  }

  goOrder() {
    this.router.navigate(['/order']);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }

  goExpert() {
    this.router.navigate(['/expert']);
  }
}