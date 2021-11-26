import { Component, OnInit } from '@angular/core';
import { ITask } from '../../Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private readonly taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((t) => this.tasks = t);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== id)));
  }

  setReminder(task: ITask) {

    this.taskService.changeReminder(task).subscribe((t) => (this.tasks = this.tasks.map(oldTask => {
      if (oldTask.id === t.id) {
        return {...oldTask, reminder: !oldTask.reminder};
      }
      return oldTask;
    })));
  }


}
