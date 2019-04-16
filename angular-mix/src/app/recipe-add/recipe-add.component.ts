import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})

export class RecipeAddComponent implements OnInit {

  recipeForm = this.formBuilder.group({
    recipeName: ['', Validators.required],
    recipeDescription: ['', Validators.required],
    recipeCookTime: ['', Validators.required],
    recipeHistory: [''],
    //?? Form Array Validators
    recipeIngredients: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    recipeInstructions: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });
  get recipeIngredients() {
    return this.recipeForm.get('recipeIngredients') as FormArray;
  }
  addIngredient() {
    this.recipeIngredients.push(this.formBuilder.control(''));
  }
  get recipeInstructions() {
    return this.recipeForm.get('recipeInstructions') as FormArray;
  }
  addInstructions() {
    this.recipeInstructions.push(this.formBuilder.control(''));
  }

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.recipeForm.status == "VALID"){
      this.recipeService.addRecipe((this.recipeForm.value as Recipe));
    }else{
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
