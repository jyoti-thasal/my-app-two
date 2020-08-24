import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('a Test Recipe','This is simply a test','https://www.julieseatsandtreats.com/wp-content/uploads/2017/05/Baked-Barbecue-Chicken-Drumsticks-6.jpg'),
  new Recipe('a Test Recipe','This is simply a test','https://www.julieseatsandtreats.com/wp-content/uploads/2017/05/Baked-Barbecue-Chicken-Drumsticks-6.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }

}
