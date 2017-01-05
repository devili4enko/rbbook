import { Component } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipe',
  templateUrl: './recipe.component.html'
})
export class RecipeComponent {
  selectedRecipe: Recipe;
}
