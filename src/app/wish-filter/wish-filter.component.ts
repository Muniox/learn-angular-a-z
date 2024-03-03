import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter();
  listFilter: string = '0';

  changeFilter(value: string) {
    return this.filter.emit(filters[Number(value)]);
  }

  ngOnInit(): void {
    this.changeFilter('0');
  }
}
