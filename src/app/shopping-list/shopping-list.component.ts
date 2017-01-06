import { Component, OnInit } from '@angular/core';

import {Ingridient} from "../shared/ingridient"

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

items: Ingridient[] = [
  new Ingridient('qwe',3),
  new Ingridient('qweqwe',2),
  new Ingridient('afsasf',44),
  new Ingridient('qwe',3),
  new Ingridient('qwasfasfe',124),
  new Ingridient('asf',3),
];
  constructor() { }

  ngOnInit() {
  }

}
