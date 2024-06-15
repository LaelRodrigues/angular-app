import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { Product } from '../../_model/Product';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent {

  products = input.required<Product[]>()

  inc(index: number) {
    this.products()[index].quant += 1
  }

  dec(index: number) {
    let product = this.products()![index]
    if (product.quant > 0) {
      product.quant -= 1
    }
  }

  remove(index: number) {
    this.products().splice(index, 1)
  }

  total() {
    return this.products().reduce((sum, product) => sum + (product.quant * product.price), 0);
  }


  @Output() productEvent = new EventEmitter<number>();

  clickProduct(indexProduct: number) {
    this.productEvent.emit(indexProduct)
  }
}
