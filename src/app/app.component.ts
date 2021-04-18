import { Component } from '@angular/core';
import { NgModel, NgForm, FormControl, FormGroup } from '@angular/forms';
import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product!:Product;
  isSubmitted:boolean = false;

  constructor(){
    this.product = new Product("","",0,"");
  }

  getProduct():Product{
    return this.product;
  }

  getProductJSON():string{
    return JSON.stringify(this.product);
  }

  controlValidation(model:any, modelName?:string):string[]{
    let modelMessages:string[] = [];

    for(let err in model.errors){
      switch(err){
        case "required":
          modelMessages.push(`${model.name || modelName} is required.`);
          break;
        case "minlength":
          modelMessages.push(`${model.name || modelName} must have at least 3 characters.`);
          break;
        case "pattern":
          modelMessages.push(`Pattern error for ${model.name || modelName}`);
          break;
      }
    }
    return modelMessages;
  }

  formSubmit(formModel:NgForm){
    this.isSubmitted = true;
  }

  formValidation(formModel:NgForm):string[]{
    let formMessages:string[] = [];
    for(let model in formModel.controls){
      let messages = this.controlValidation(formModel.controls[model],model);
      messages.forEach(message => formMessages.push(message));
    }
    return formMessages;
  }
}
