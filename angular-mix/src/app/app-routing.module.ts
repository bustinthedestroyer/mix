import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard'

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent, canActivate: [GuardGuard] },
  { path: 'recipes/add', component: RecipeAddComponent, canActivate: [GuardGuard] },
  { path: 'recipes/:id', component: RecipeComponent, canActivate: [GuardGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
