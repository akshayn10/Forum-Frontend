import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CategoryModel } from 'src/app/category/category-response';
import { CategoryService } from 'src/app/category/category.service';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm!: FormGroup;
  postPayload: CreatePostPayload;
  categories!: Array<CategoryModel>;

  constructor(private router: Router, private postService: PostService,private fb :FormBuilder,
    private categoryService:CategoryService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      categoryName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      postName: ['', Validators.required],
      categoryName: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.categoryService.getAllcategorys().subscribe((data) => {
      this.categories = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.value.postName;
    this.postPayload.categoryName = this.createPostForm.value.categoryName;
    this.postPayload.url = this.createPostForm.value.url;
    this.postPayload.description = this.createPostForm.value.description;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}
