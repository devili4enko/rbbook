import { RecipeService } from './../recipe-service.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../recipe';
import { ShoppingListService } from "../../shopping-list/shopping-list.service"

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number = 1;
  private subscrioption: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute, 
              private recipeService: RecipeService) { }

  ngOnInit() {
   this.subscrioption = this.route.params.subscribe(
   (params: any) =>{
     this.recipeIndex=params['id'];
     this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
   });
  }

  ngOnDestroy(){
    this.subscrioption.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes'])
  }

  addToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingridients);
  }

}
