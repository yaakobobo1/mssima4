import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-all-family',
  templateUrl: './all-family.component.html',
  styleUrls: ['./all-family.component.css']
})
export class AllFamilyComponent implements OnInit {

  public memberFamily
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllFamily().subscribe(res=>{
      console.log(res)
      this.memberFamily = res
    },
    err =>console.log(err))
  }

}
