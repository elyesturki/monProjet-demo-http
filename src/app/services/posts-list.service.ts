import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPost } from '../domain/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsListService {
  URL = "https://jsonplaceholder.typicode.com/posts";
  constructor( private _http: Http) { }

  getAllPosts(): Observable<IPost[] > {
    return this._http.
    get(this.URL).
    map((resp: Response) => <IPost[]> resp.json());

  /*  return [
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
    ];*/
  }
}
