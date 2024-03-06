import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../../../shared/models/productItem';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private store: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id) {
        this.store.getProduct(parseInt(id, 10)).subscribe((data) => {
          this.product = data;
        });
      }
    });
  }
}
