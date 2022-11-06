import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentPayload } from '../comment/comment.payload';
import { CommentService } from '../comment/comment.service';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { faArrowUp,faArrowDown,faComments } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name: string;
  comments!: CommentPayload[];
  posts!: PostModel[];
  postLength!: number;
  commentLength!: number;
  faArrowUp=faArrowUp;
  faArrowDown=faArrowDown;
  faComments=faComments;


  constructor(private activatedRoute: ActivatedRoute,
    private commentService: CommentService,private postService:PostService,private router:Router) {
    this.name = this.activatedRoute.snapshot.params['name'];

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });

    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
    });

  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }


  ngOnInit(): void {}
  }
