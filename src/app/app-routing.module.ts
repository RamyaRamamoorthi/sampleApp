import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactformComponent } from './contactform/contactform.component';


const routes: Routes = [
  {path:'contactform',component:ContactformComponent},
  //{path:'', pathMatch:"full",redirectTo: 'admin'},
  {path:'admin',component:AdminComponent},
  {path:'products',component:ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'logout',component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
