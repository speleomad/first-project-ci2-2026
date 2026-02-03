import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info = {
    name: "demo",
    email: "demo@fsb.ucar.tn",
    tel: 11111111
  }
  comments: Comment[] = [{ id: 1, message: "first-comment", date: new Date() }];
  constructor() { }
  getInfos() {
    return this.info;
  }
  addComment(comment:Comment):void {
    comment.id=this.comments.length+1;
    comment.date = new Date();
    this.comments.push(comment);
  }
  getAllComment():Comment[] {
    return this.comments;
  }

}
