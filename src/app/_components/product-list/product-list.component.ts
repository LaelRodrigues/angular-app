import { Product } from './../../_model/Product';
import { Component } from '@angular/core';
import { ProductDataComponent } from '../product-data/product-data.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDataComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  produtoSelect: number | undefined

  products: Product[] = [
    {
      name: 'Pizza da mãe',
      description: 'Saborosa pizza caseira',
      price: 79.9
    },
    {
      name: 'Churrasquinho',
      description: 'Delicioso espetinho',
      price: 29.9
    },
    {
      name: 'Espaguete',
      description: 'Apetitoso macarrão',
      price: 59.9
    }
  ]

  clickProductList(indexProduct: number) {
    this.produtoSelect = indexProduct;
  }
}
