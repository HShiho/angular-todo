import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent  implements OnInit {

  constructor() { }

  @Output() addTask = new EventEmitter();

  newTask = {
    title: '',
    deadline: null,
  };

  ngOnInit(): void {
  }

  submit() {
    this.addTask.emit({
      title: this.newTask.title,
      done: false,
      deadline: this.newTask.deadline ? new Date(this.newTask.deadline) : null
    });
    this.newTask = {
      title: '',
      deadline: null,
    };
  }



}
