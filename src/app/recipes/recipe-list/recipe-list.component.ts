import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://pixy.org/src/12/124601.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://pixy.org/src/12/124601.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
