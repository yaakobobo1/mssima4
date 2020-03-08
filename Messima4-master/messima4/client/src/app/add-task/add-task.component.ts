import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public newTask
  public allFamily
  constructor(private taskService: TaskService, private formBuilder:FormBuilder ) { }


  ngOnInit() {
    this.newTask= this.formBuilder.group({
      description: [''],
      finishDate:[''],
      familyID:['']
    })
    this.taskService.getAllFamily().subscribe(res=>{
      this.allFamily= res
    },err=>console.log(err))


  }
  public addNewTask(){
    console.log('im in button');
    console.log(this.newTask.value);
    this.taskService.addTask(this.newTask.value).subscribe(res=>{
      console.log(res)
    },err=>{console.log(err)})
  }

}
