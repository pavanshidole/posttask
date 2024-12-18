import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'posttask';

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data=> console.log(data));
  }
}
