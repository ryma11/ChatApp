import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../shared/user.service';
// import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService],

})
export class SignupComponent implements OnInit {
  showSucessMessage= false;
  serverErrorMessages='';
    constructor( public userService:UserService) {}
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    //subscribtion to the obsarvble 
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        console.log(err.status)
        if (err.status ===422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong. Please contact admin.';
      }
 
    );
   
    console.log(form.value)
  }

  resetForm(form: NgForm) {
    this.userService.SelectedUser = {
      userName: '',
      userSurname: '',
      email: '',
      Password:'',
      userGender:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }



}
