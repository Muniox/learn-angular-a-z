import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from './../shared/services/eventService';

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
  filter: any;

  constructor(private events: EventService) {
    this.events.listen('removeWish', (wish: any) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
}
