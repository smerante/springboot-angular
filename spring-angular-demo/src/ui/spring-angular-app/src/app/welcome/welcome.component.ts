import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
  personalInfo = {
    firstName : "",
    lastName : "",
    email: "",
    dob: null,
    sin:"",
    cell:""
  }
  validName=true;
  validLastName=true;
  validEmail=true;
  validDate=true;
  validSIN=true;
  validCell=true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onNameChange = function(newValue) {
    const firstNameRegex = /^[a-z ,.'-]+$/i;
    if (firstNameRegex.test(newValue)) {
        this.validName = true;
    }else {
      this.validName = false;
    }
  }
  onLastNameChange = function(newValue){
    const lastNameRegex = /^[a-z ,.'-]+$/i;
    if (lastNameRegex.test(newValue)) {
        this.validLastName = true;
    }else {
      this.validLastName = false;
    }
  }
  onEmailChange = function(newValue){
    const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }
  }
  onDateChange = function(newVal){
    var dob = new Date(newVal);
    var currentDate = new Date();
    var ageReq = 568061000000; //> Over 18
    var age = currentDate.getTime() - dob.getTime();

    this.validDate =  age>ageReq;
  }
  onCellChange = function(newValue){
    newValue = newValue.replace(/[(a-zA-z),-]/g,'');
    const lastNameRegex = /^1?(\d{3}\d{3}\d{4})$/;
    if (lastNameRegex.test(newValue)) {
        this.validCell = true;
    }else {
      this.validCell = false;
    }
  }
  onSINChange = function(newVal){
    const sinRegex =/^(\d{3}-\d{3}-\d{3})$/;
    if (sinRegex.test(newVal)) {
        this.validSIN = true;
    }else {
      this.validSIN = false;
    }
  }
  showSin = function(){
    var sin = document.getElementById("sin");
    if (sin["type"] === "password") {
      sin["type"] = "text";
    } else {
      sin["type"] = "password";
    }
  }
  submitForm = function(){
    this.onNameChange(this.personalInfo.firstName);
    this.onLastNameChange(this.personalInfo.lastName);
    this.onEmailChange(this.personalInfo.email);
    this.validDate = this.personalInfo.dob !== null; 
    this.onCellChange(this.personalInfo.cell);
    this.onSINChange(this.personalInfo.sin);
    if(!this.invalidForm()){
      this.updateProfile();
    }
  }
  invalidForm = function(){
    return !(this.validName&&this.validLastName&&this.validEmail&&this.validDate&&this.validCell&&this.validSIN);
  }
  updateProfile = function(){
    this.http.post("http://localhost:8080/add-customer",this.personalInfo).subscribe(data=>
      {
        console.log(data);
      },
      (err: HttpErrorResponse)=>{

      }
    );
  }
}
