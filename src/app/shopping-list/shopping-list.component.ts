import { Component, OnInit } from '@angular/core';

import { Ingridient } from "../shared/ingridient"
import { ShoppingListService } from "./shopping-list.service"

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingridient[] = [];
  selectedItem: Ingridient = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectItem(item: Ingridient) {

  }

}
