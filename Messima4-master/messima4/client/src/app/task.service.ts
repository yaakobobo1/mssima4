import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) { }

  public getAllFamily(){
    return this.http.get('http://localhost:3000/allFamily')
  }

  public getAllTasks(){
    return this.http.get('http://localhost:3000/allTasks')
  }

  public addTask(task){
    return this.http.post('http://localhost:3000/addTask', task)

  }
}
