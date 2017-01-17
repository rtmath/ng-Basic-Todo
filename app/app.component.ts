import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let task of tasks">{{task.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = "Angular Homework";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish this freaking homework already"),
    new Task("Like seriously friggin finish this shit already"),
    new Task("Learn something actually cool like F#")
  ];
}

export class Task {
  public done: boolean = false;
  constructor (public description: string) { }
}
