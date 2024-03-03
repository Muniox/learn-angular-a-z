import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];
  title: string = 'wishlist';
  newWishText: string = '';
  listFilter: string = '0';
  get visibleItems(): WishItem[] {
    const value = this.listFilter;
    switch (value) {
      case '0':
        return this.items;
      case '1':
        return this.items.filter((item) => !item.isComplete);
      case '2':
        return this.items.filter((item) => item.isComplete);
      default:
        return this.items;
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
