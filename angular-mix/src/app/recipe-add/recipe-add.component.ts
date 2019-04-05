import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
//import { Recipe } from '../recipe';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    console.log(this.recipeForm.status);
  }

  ////?? Make a reusable back button component?
  goBack(): void {
    this.location.back();
  }
}
