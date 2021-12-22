import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goReview() {
    this.router.navigate(['/review']);
  }
}