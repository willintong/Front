import { Component, OnInit } from '@angular/core';

import { IProduct } from '../iProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Información del Producto';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
