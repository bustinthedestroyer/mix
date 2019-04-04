import { Recipe } from './recipe';

export const RECIPES: Recipe[] = [
  {
    id: 11,
    name: 'Spinnich Sausage Soup',
    description: 'This is a hearty soup recipe, good for fall and winter',
    cookTime: '1 hour 20 mins',
    ingredients:[
      '1 lb Sausage',
      '32 oz vegitable stock',
      '1 T Flour',
      'Large Onion',
      'Red Pepper',
      '2-8 Garlic cloves',
      '1 lb Spinnich',
      '1 t Red pepper flakes',
      'Salt and Pepper to taste'
    ],
    instructions:[
      'Dice onion, red pepper, and garlic',
      'In the bottom of a large pot, brown sausage on medium, drain, leave enough grease to coat the bottom',
      'Saute onion with red pepper flakes for 3-5 min',
      'Sprinkle flour and whisk to make a paste, add some butter if you need more fat',
      'Add Garlic and diced red pepper and saute for 2-4 min',
      'Add stock and bring to a boil',
      'Add spinnich and stir until mixed and the spinnich starts to whilt',
      'Add sausage, reduce heat to low and let simmer for 45 min',
    ],
    history: 'My grandma used to make this recipe during the colder months, she would just be cooking it all day and it would make the house full of feelings.'
  },
];