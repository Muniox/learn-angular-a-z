import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem; //wykrzyknik oznacza, że ta wartość nie jest nullem

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.wish.isComplete };
  }
}
