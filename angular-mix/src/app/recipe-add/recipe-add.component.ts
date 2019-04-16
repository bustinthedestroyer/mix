import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})

export class RecipeAddComponent implements OnInit {

  recipeForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    cookTime: ['', Validators.required],
    history: [''],
    ingredients: this.formBuilder.array([
      this.formBuilder.control('')
    ], Validators.minLength(1)),
    instructions: this.formBuilder.array([
      this.formBuilder.control('', Validators.required)
    ], Validators.minLength(1))
  });
  get recipeIngredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.recipeIngredients.push(this.formBuilder.control(''));
  }
  get recipeInstructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }
  addInstructions() {
    this.recipeInstructions.push(this.formBuilder.control(''));
  }

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe((this.recipeForm.value));
      this.router.navigate(["/recipes"]);
    } else {
      console.log('Recipe not valid');
    }
  }

  // turnFormDataIntoRecipeObject(){
  //   try{
  //     let newRecipe : Recipe = {
  //       recipeName = this.recipeForm.controls['recipeName']
  //     }
  //   }catch{
  //     console.log('Could not make a recipe')
  //   }
  // }

  ////?? Make a reusable back button component?
  goBack(): void {
    this.location.back();
  }
}
