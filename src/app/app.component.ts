import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductDataComponent } from './_components/product-data/product-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, ProductDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
