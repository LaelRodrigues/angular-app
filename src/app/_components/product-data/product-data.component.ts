import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../_model/Product';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent {

  @Input() products: Product[] = []

  @Output() productEvent = new EventEmitter<number>();

  clickProduct(indexProduct: number) {
    this.productEvent.emit(indexProduct)
  }
}
