import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
      recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2023/11/14/11/07/sparrow-8387465_1280.jpg')
      ];
    
      constructor(){}
      ngOnInit() {

      }
}
