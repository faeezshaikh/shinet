import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoralisService } from '../services/moralis.service';


@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.page.html',
  styleUrls: ['./addpackage.page.scss'],
})
export class AddpackagePage implements OnInit {

  gems = 1;
  days = 15;
  ionicForm: FormGroup;
  isSubmitted = false;

  delivery = false;
  fragile = false;

  constructor(private router: Router,public formBuilder: FormBuilder,private moralisService:MoralisService) { }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      address: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      range: ['', [Validators.min(1)]],
      instructions: ['', [Validators.nullValidator]],
      delivery: ['', [Validators.nullValidator]],
      fragile: ['', [Validators.nullValidator]]
    });
  }

  goback() {
    this.router.navigateByUrl('/listpackages');
  }

  rangeChanged(){
    if (this.gems > 18 && this.gems < 20)
        {this.days = 1;}

    if (this.gems > 15 && this.gems < 18)
        {this.days = 6;}
    if (this.gems > 12 && this.gems < 15)
        {this.days = 7;}
    if (this.gems > 8 && this.gems < 12)
       { this.days = 10;}
    if (this.gems > 5 && this.gems < 8)
        {this.days = 12;}
    if (this.gems > 0 && this.gems < 5)
        {this.days = 15;}

  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    console.log('Submitted');

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');

      console.log();

      return false;
    } else {
      console.log(this.ionicForm.value);
      this.isSubmitted = false;
      this.ionicForm.reset();
      this.gems = 1;
      this.days = 15;
      this.moralisService.addToList('sender','112 ridge dr','345-345-34535','asbc@gal.com',
                                    this.ionicForm.value.address,this.ionicForm.value.mobile,
                                      this.ionicForm.value.email,this.ionicForm.value.range,34,'',
                                      this.ionicForm.value.fragile,this.ionicForm.value.instructions,
                                      this.ionicForm.value.delivery,'Open');
    }
  }

}
