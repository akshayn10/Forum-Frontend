import { PostModel } from 'src/app/shared/post-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { throwError } from 'rxjs';
import { faArrowUp,faArrowDown,faComments } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {
  categoryId: number;
  posts! :PostModel[];
  faArrowUp=faArrowUp;
  faArrowDown=faArrowDown;
  faComments=faComments;


  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router : Router
  ) {
    this.categoryId = this.route.snapshot.params['categoryId'];
  }


  ngOnInit(): void {
    this.getCategoryPosts();
  }
  private getCategoryPosts() {
    this.postService.getPostsByCategory(this.categoryId).subscribe(data => {
      this.posts = data;
    }, error => {
      throwError(error);
    });
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
