import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MockedProducts} from '../../utils/mocks';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param1 = this.route.snapshot.params.id;

    this.product = MockedProducts[param1];
  }

}
