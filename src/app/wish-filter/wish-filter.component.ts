import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<string>();
  listFilter = '0';
}
