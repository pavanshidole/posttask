import { Component, OnInit } from '@angular/core';
import { postArr } from 'src/app/const/posts';
import { Ipost } from 'src/app/module/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

 postInfo:Array<Ipost>=postArr;

  constructor() { }

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data=> console.log(data));
  }

}
