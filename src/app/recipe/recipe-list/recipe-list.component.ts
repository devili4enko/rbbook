import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'
import { RecipeService } from '../recipe-service.service'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>()

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}