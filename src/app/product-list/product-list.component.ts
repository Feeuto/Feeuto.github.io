import { Component } from '@angular/core';

import { products , Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = products;

  share(product: Product): void {
    window.open(`https://web.whatsapp.com/send?text=${product.link}`);
  }

  onNotify(product: Product): void {
    window.alert(`You will be notified when the ${product.name} goes on sale`);
  }
}
