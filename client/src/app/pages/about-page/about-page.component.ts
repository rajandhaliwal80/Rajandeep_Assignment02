import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route);}

  ngOnInit() {
  }

}
