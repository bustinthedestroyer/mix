import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
