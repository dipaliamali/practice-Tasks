import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  public ProjectName:string ="Constrotech";

  public Date=new Date();

  public student = {
    fname:"Dipali",
    lname:"Mali",
    Age:"26"
  }

  public salary=20000;

  constructor() { }

  ngOnInit(): void {
  }

}
