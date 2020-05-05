import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent  
{
 text = 'Employee Information page';
 contactForm: FormGroup;
 
 contact =
 {
   fname:'',
   lname:'',
   text1:'',
   text2:'',
   location: ''
   
  };
 submitted = false;
  constructor() 
  { 
    this.createForm();  
  }
createForm(): void
{
  this.contactForm = new FormGroup
  ({
    'fname' : new FormControl(this.contact.fname,
      [
      Validators.required,
      Validators.minLength(4)
    ]),
    'lname' : new FormControl(this.contact.lname,
      
      Validators.required),

    'text1' : new FormControl(this.contact.text1,
      Validators.required),

      'text2' : new FormControl(this.contact.text2,
        Validators.required),

        'location' : new FormControl(this.contact.location,
          Validators.required),
       
        
     });
     
}
onSubmit():void
{
  this.submitted = true;
}
  

}
