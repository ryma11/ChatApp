import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  //setting default route 

  {path:'', redirectTo:'/signup',pathMatch:'full'},
  {path:'signup',component:UserComponent,
  children:[
    {path:'',component: SignupComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
