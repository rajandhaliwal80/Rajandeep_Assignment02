import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route);}

  ngOnInit() {
  }

}
