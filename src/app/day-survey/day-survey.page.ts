import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-survey',
  templateUrl: './day-survey.page.html',
  styleUrls: ['./day-survey.page.scss'],
})
export class DaySurveyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diagnosis() {
    this.router.navigate(['/diagnosis']);
  }
}
