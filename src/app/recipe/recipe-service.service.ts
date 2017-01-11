import { Injectable } from '@angular/core';

import { Recipe } from './recipe'
import { Ingridient } from '../shared/ingridient'

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Bacon', 'tasty bacon', 'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/bacon_sizzling_facts_rmq/650x350_bacon_sizzling_facts_rmq.jpg', []),
        new Recipe('Pizza', 'tasty Pizza', 'http://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png',
            [
                new Ingridient('flour', 10),
                new Ingridient('tomato', 10),
                new Ingridient('bacon', 1000)
            ]),
        new Recipe('Burger', 'tasty Burger', 'http://smokeybones.com/wp-content/uploads/2015/11/smokehouse-burger.jpg', []),
    ];

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe){
        return this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
}