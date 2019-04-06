import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {super(route) }

  ngOnInit() {
  }

}
