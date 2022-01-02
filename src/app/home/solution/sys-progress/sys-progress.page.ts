import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sys-progress',
  templateUrl: './sys-progress.page.html',
  styleUrls: ['./sys-progress.page.scss'],
})
export class SysProgressPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diagnosis() {
    this.router.navigate(['/diagnosis']);
  }
}
