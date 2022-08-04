import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor( private fb:FormBuilder) { }
public reactiveForm :any;
isSubmitted:boolean=false;
  ngOnInit(): void {
  this.reactiveForm  = this.fb.group({
   fname:['',[Validators.required]],
   lname:['',[Validators.required]],
   email:['',[Validators.required,Validators. pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
   password:['',[Validators.required]],
   cpassword:['',[Validators.required]]
  })  
  }
  

get f () 
{
  return this.reactiveForm.controls;
}
 
onSubmitForm()
{
console.log(this.reactiveForm);
console.log(this.reactiveForm.value);
this.isSubmitted=true;
  
}

}
