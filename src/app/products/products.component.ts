import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  todaydate : string= new Date().toDateString();
  array :any[];

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.array=[
      {ProductName : "Headphone", ManufactureDate:this.todaydate, ExpiryDate:this.todaydate,Brand:"Moto", Price:723},
      {ProductName : "Television", ManufactureDate:this.todaydate, ExpiryDate:this.todaydate,Brand:"Sony", Price:28723},
      {ProductName : "WashingMachine", ManufactureDate:this.todaydate, ExpiryDate:this.todaydate,Brand:"Panasonic", Price:10723},
      {ProductName : "Laptop", ManufactureDate:this.todaydate, ExpiryDate:this.todaydate,Brand:"HP", Price:60723},];
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl('/admin');
  }

}
