import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public Name: string="Inxise Datalabs";

  public Specialization: string="A boutique market research company & consulting firm";


  public image = "/assets/angularimg.png"

  public link:any;

  public Temp:string ="";

  
  constructor() { }

  ngOnInit(): void {

    this.link= "https://merren.io/";
  }
    
  
  onClick()
    {
      console.log("Thanks for subscription");
    }

    onSubmit(){
      console.log("Your Application is submitted Successfully");
    }
    }
    
  


