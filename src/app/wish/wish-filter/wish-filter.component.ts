import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

// zamienić później na switch w komponencie rodzica
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
  @Input() filter: any;
  @Output() filterChange = new EventEmitter();
  listFilter: string = '0';

  updateFilter(value: string) {
    this.filter = filters[Number(value)];
    this.filterChange.emit(this.filter);
  }

  ngOnInit(): void {
    this.updateFilter('0');
  }
}
