import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from './../../shared/services/eventService';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string; //wykrzyknik oznacza, że ta wartość nie jest nullem
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  constructor() {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from items

      console.log(wish);
    });
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.fullfilled };
  }
}
