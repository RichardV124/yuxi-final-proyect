import { Post } from './../../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  getPost() {
		// siempre suscribirse en el componente
		return this.http.get<Post[]>(this.postUrl);
	}

}
