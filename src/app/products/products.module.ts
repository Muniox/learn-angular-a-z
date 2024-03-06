import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [ProductslistComponent],
  providers: [ProductsService],
  imports: [CommonModule],
  exports: [ProductslistComponent],
})
export class ProductsModule {}
