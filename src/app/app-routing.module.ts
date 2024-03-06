import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

const routes: Routes = [
  { path: '', component: WishComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },
  { path: '**', component: NotFoundComponent }, //kolejność ma znaczenie
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
