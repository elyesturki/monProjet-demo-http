import { Component, OnInit } from '@angular/core';
import { IPost } from '../../domain/ipost';
import { PostsListService } from '../../services/posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  data: IPost[];
  constructor( private _service: PostsListService) { }

  ngOnInit() {
    this._service.getAllPosts().subscribe(
      posts => this.data = posts
    );
  }

}
