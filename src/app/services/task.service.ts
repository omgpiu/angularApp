import { Injectable } from '@angular/core';
import { ITask, TAddTask } from '../Types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private readonly http: HttpClient) {
  }

  private getUrl(id?: number) {
    return `${this.apiUrl}/${id}`;
  }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<ITask> {
    return this.http.delete<ITask>(this.getUrl(id));
  }

  changeReminder(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(this.getUrl(task.id), task, httpOptions);
  }
  addTask(task: TAddTask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task, httpOptions);
  }
}
