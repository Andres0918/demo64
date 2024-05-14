import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient, private firestore: Firestore) { }

  getAllPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAllPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  
  getCommentsByPostId(postId: number){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
  
  guardar(api:any): Promise<any>{
    return addDoc(collection(this.firestore, 'apis'), Object.assign({}, api))
  }

}
