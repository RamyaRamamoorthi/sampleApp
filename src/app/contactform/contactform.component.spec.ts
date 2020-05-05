import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactformComponent } from './contactform.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactformComponent;
  let fixture: ComponentFixture<ContactformComponent>;
  let de: DebugElement;
  let el: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContactformComponent 
      ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(()=>{
      fixture=TestBed.createComponent(ContactformComponent);
      component=fixture.componentInstance;
      de=fixture.debugElement.query(By.css('form'));
      el=de.nativeElement;
    });
  }));

  it(`should have as text'contact page'`,async(()=>{
    expect(component.text).toEqual('Employee Information page');
  }));


  it(`should set submitted to ture`,async(()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`form should be invalid`,async(()=>{
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text1'].setValue('');
    component.contactForm.controls['text2'].setValue('');
    component.contactForm.controls['location'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`,async(()=>{
    component.contactForm.controls['fname'].setValue('Ramya');
    component.contactForm.controls['lname'].setValue('Ramyamoorthy');
    component.contactForm.controls['text1'].setValue('Ambattur');
    component.contactForm.controls['text12'].setValue('Chennai');
    component.contactForm.controls['location'].setValue('Chennai');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});