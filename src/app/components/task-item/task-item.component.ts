import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../../Task';

interface IOnToggle {
  id: number;
  reminder: boolean;
}
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(id: number) {
    this.onDeleteTask.emit(id);
  }

  onToggle(task:ITask) {
    this.onToggleTask.emit(task);
  }

}
