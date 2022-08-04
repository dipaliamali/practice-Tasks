import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public age=25;
   public EmpData:any;

    arrays=['red','blue','white','black']

    choose:any=1;

  constructor() { }

  ngOnInit(): void {

    this.EmpData=[
      {img:'https://th.bing.com/th/id/OIP.ur9pGVAJsKIhPh8eSlfNWAHaHa?pid=ImgDet&rs=1',name:'Mobile' , id:1, salary:5000},
      {img:'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/computer/d/w/o/x415ka-ek111ws-thin-and-light-laptop-asus-original-imagb7gsfubu98vz.jpeg?q=70',name:'laptop' , id:1,  salary:15000},
      {img:'https://media.fozdoo.com/2020/03/71EwLHcuuJL._AC_SL1500_.jpg',name:'Tv' ,     id:1,   salary:15000}
    ]
  }
  addstyle(){
    return{
      'font-size':'20px',
      'font-style':'italic',
      'color':'green'
    }
 
  }
}

  
