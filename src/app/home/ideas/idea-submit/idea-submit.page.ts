import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-submit',
  templateUrl: './idea-submit.page.html',
  styleUrls: ['./idea-submit.page.scss'],
})
export class IdeaSubmitPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSubmit() {
    this.router.navigate(['/submit']);
  }

}
