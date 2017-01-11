import { RECIPES_ROUTES } from './recipe/recipe.route';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: RECIPES_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);