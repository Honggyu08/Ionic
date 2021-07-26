import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skinnn-survey2',
  templateUrl: './skinnn-survey2.page.html',
  styleUrls: ['./skinnn-survey2.page.scss'],
})
export class SkinnnSurvey2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSkinSurvey() {
    this.router.navigate(['/skin-survey']);
  }
}
