import { Product } from './../../_model/Product';
import { Component } from '@angular/core';
import { ProductDataComponent } from '../product-data/product-data.component';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDataComponent, MatCardModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  produtoSelect: number | undefined

  products: Product[] = [
    {
      name: 'Pizza da mãe',
      description: 'Saborosa pizza caseira',
      price: 79.9,
      quant: 1
    },
    {
      name: 'Churrasquinho',
      description: 'Delicioso espetinho',
      price: 29.9,
      quant: 1
    },
    {
      name: 'Espaguete',
      description: 'Apetitoso macarrão',
      price: 59.9,
      quant: 1
    }
  ]

  clickProductList(indexProduct: number) {
    this.produtoSelect = indexProduct;
  }
}
