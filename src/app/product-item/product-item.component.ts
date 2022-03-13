import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products , Product } from '../products';

import { NgxImageZoomModule } from 'ngx-image-zoom';//Zoom


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit(): void {
  }

}
