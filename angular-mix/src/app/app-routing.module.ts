import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

const routes: Routes = [

  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/add', component: RecipeAddComponent },
  { path: 'recipes/:id', component: RecipeComponent },

  // //?? Why does this not work for add recipe
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', component: RecipesComponent },
  // { path: 'recipes/:id', component: RecipeComponent },
  // { path: 'recipes/add', component: RecipeAddComponent },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
