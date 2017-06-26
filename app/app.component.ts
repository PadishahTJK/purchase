import  {Component} from '@angular/core';
// import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import{IProduct}  from './product';

export class Item {

 
    purchase:string;
    done:boolean;
    price:number;

  constructor(purchase: string,price:number ){
     this.purchase = purchase;
     this.price = price;
     this.done = false;
   }
}// Class Item

@Component({
   selector: 'purchase-app',
   template:`
       <div class="page-header">
        <h1> Shopping List </h1>
    </div>
    <div class="panel">
<!--  NAzvanie INPUT -->
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
<!--  ZENA INPUT -->
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
<!-- Dobavit Button  i dobavlyaem method  (click)="addItem(text,price)"-->
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
<!--  TABLIZA  -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
<!--  ZENA  В самом шаблоне для вывода данных из массива items в таблицу предусмотрена директива: -->
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>

            `
})

export class  AppComponent {

items:Item[] =[
      {purchase:"Brot",done:false,price:15.9},
      {purchase:"Oil",done:false,price:60},
      {purchase:"Cheese",done:true,price:2.50},
      {purchase:"potato",done:false,price:3.10}
                  ];

//JS
  // addItem =  function(text,price){

//TypeS

  addItem(text:string,price:number):void{

      if(text == null || text== undefined || text.trim() == ""){
        return;
      }
      if(price ==null || price ==undefined || isNaN(price)){
        return;
      }
      else{
        this.items.push(new Item(text,price) );
      }

  }//addFunction
}//AppComponent Class
