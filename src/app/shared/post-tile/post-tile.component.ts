import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUp,faArrowDown,faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})

export class PostTileComponent implements OnInit {
  faArrowUp=faArrowUp;
  faArrowDown=faArrowDown;
  faComments=faComments;

  posts$: Array<PostModel> = [];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      console.log(post);
      this.posts$ = post;
    });
  }
  ngOnInit(): void {
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
