import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TAddTask } from '../../Types';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TAddTask> = new EventEmitter();
  text!: string;
  date!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;
  constructor(private readonly uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }
    if (this.text.length < 2) {
      alert('Task name must be more then 2 symbols');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.date,
      reminder: this.reminder
    };
    this.onAddTask.emit(newTask);
    this.text = '';
    this.date = '';
    this.reminder = false;
  }

}
