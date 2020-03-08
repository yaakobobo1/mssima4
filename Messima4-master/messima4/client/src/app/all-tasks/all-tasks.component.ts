import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
  public tasks
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(res=>{
      this.tasks =res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

}
