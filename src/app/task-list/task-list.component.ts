import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  tasks: Task[] = [
    {title: '牛乳を買う', done: false, deadline: new Date('2023-01-01')},
    {title: '可燃ごみを出す', done: true, deadline: new Date('2023-01-02')},
    {title: '銀行に行く', done: false, deadline: new Date('2023-01-03')},
  ];

  ngOnInit(): void {
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }


}
