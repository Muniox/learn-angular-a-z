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
  title = 'wishlist';

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  addNewWish(text: string) {
    const newWish = new WishItem(text);
    this.items.push(newWish);
  }
}
