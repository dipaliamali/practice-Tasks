import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
    onSubmit(frm:any){
      console.log(frm.value);
      console.log(frm.value.email);
      }
      
    
    }
  
