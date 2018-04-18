import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';

@Injectable()
export class PostsListService {

  constructor() { }

  getAllPosts(): IPost[] {
    return [
      {
        userId: 100,
        id: 100,
        title: 'Titre 100',
        body: 'Body 100'
      },
      {
        userId: 200,
        id: 200,
        title: 'Titre 200',
        body: 'Body 200'
      },
      {
        userId: 300,
        id: 300,
        title: 'Titre 300',
        body: 'Body 300'
      }
    ]
  }
}
