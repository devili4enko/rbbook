import { ShoppingListService } from './shopping-list.service';
import { Ingridient } from './../shared/ingridient';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Ingridient;
  isAdd = true;
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    console.log(changes);
  }

  onSubmit(item: Ingridient) {
    console.log(item);
    if (this.isAdd) {
      this.sls.addItems([item]);
    }
  }

  showItems() {
    console.log(this.sls.getItems());
  }
}
