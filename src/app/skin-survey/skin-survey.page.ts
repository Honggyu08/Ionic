import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skin-survey',
  templateUrl: './skin-survey.page.html',
  styleUrls: ['./skin-survey.page.scss'],
})
export class SkinSurveyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSkinSurvey2() {
    this.router.navigate(['/skinnn-survey2']);
  }

}
