import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Task[] = [
    {title: '牛乳を買う', done: false, deadline: new Date('2023-01-01')},
    {title: '可燃ごみを出す', done: true, deadline: new Date('2023-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2023-01-03')},
  ];

  newTask = {
    title: '',
    deadline: new Date(),
  };

  addTask() {
    this.tasks.push({title: this.newTask.title, done: false, deadline: new Date(this.newTask.deadline)});
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }

  isOverdue(task: Task): boolean {
    return !task.done && task.deadline.getTime() < (new Date()).setHours(0,0,0,0);
  }

}
