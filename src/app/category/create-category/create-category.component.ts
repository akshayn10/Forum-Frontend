import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CategoryModel } from '../category-response';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createcategoryForm!: FormGroup;
  categoryModel!: CategoryModel;
  title = '';
  description = '';

  constructor(private router: Router, private categoryService: CategoryService,private fb :FormBuilder) {
    this.createcategoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.categoryModel = {
      name: '',
      description: ''
    }
  }
  discard() {
    this.router.navigateByUrl('/');
  }

  createcategory() {
    this.categoryModel.name = this.createcategoryForm.value.title;
    this.categoryModel.description = this.createcategoryForm.value.description;
    this.categoryService.createcategory(this.categoryModel).subscribe(data => {
      this.router.navigateByUrl('/view-categories');
    }, error => {
      throwError(error);
    })
  }
  ngOnInit(): void {

  }

}
