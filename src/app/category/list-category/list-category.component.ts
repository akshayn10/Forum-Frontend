import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { CategoryModel } from '../category-response';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {


  categories!: Array<CategoryModel>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllcategorys().subscribe(data => {
      this.categories = data;
    }, error => {
      throwError(error);
    })
  }
}
