import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Bacon', 'tasty bacon', 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/bacon_sizzling_facts_rmq/650x350_bacon_sizzling_facts_rmq.jpg',[]),
    new Recipe('Pizza', 'tasty Pizza', 'http://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png',[]),
    new Recipe('Burger', 'tasty Burger', 'http://smokeybones.com/wp-content/uploads/2015/11/smokehouse-burger.jpg',[]),
  ];
  
  @Output() recipeSelected = new EventEmitter<Recipe>()

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}