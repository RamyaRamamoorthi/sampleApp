import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm : FormGroup;
  isSubmitted = false;
  constructor(private authService : AuthService, private router: Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    });
  } 
  get formControls()
  {
    return this.loginForm.controls;
  }
  login()
  {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login();
    this.router.navigateByUrl('/products');
  }
  }
  
  

