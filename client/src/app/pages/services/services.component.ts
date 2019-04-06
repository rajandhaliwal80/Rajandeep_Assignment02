import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {super(route); }

  ngOnInit() {
  }

}
