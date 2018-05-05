import { PostProvider } from './../../providers/post/post';
import { Post } from './../../interfaces/post.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  listPosts: Observable<Post[]>;

  constructor(public navCtrl: NavController,private postService: PostProvider) {

    this.listarPosts();

  }

  listarPosts(){
    this.listPosts= this.postService.getPost();
  }

  goToPostDetail(item):void{
    this.navCtrl.push('PostDetailPage',{currentItem: item})
    
  }

}
