import { Injectable } from '@angular/core';

import {Ingridient} from '../shared/ingridient'

@Injectable()
export class ShoppingListService {
  private indridients: Ingridient[] = [];

  constructor() { }

  getItems()
  {
    return this.indridients;
  }

  addItems(items: Ingridient[]){
    Array.prototype.push.apply(this.indridients, items);
  }
}
