import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipe = new Recipe('Test', 'qqqqqqqqqqqqq', 'http://xiostorage.com/wp-content/uploads/2015/10/test.png')

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}