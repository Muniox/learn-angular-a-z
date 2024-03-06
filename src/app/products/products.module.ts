import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsService } from './products.service';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductslistComponent, ProductsDetailsComponent],
  providers: [ProductsService],
  imports: [CommonModule, RouterModule],
  exports: [ProductslistComponent],
})
export class ProductsModule {}
