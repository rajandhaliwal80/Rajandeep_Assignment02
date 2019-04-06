import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {super(route); }

  ngOnInit() {
  }

}
