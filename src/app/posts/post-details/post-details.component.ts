import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  public id: string;
  post: Post;
  subs: Subscription;


  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subs = this.postsService.getSinglePost(this.route.snapshot.params['id'])
    // .subscribe(
    //   postData => {
    //     this.post = {
    //       id: postData.id,
    //       title: postData.title,
    //       description: postData.description,
    //       content: postData.content,
    //       imagePath: postData.imagePath,
    //       creator: postData.creator
    //     }
    //   }
    // );

  }
}
