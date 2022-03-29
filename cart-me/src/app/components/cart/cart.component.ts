import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:any 
  grandTotal:number = 0
  
   //##############################################################

  constructor(private cartApi:CartService) { }

   //##############################################################

  ngOnInit(): void {
    
  }
 //##############################################################

  addAutomaticallyToCart(){
    this.cartApi.getProducts()
  }

   //##############################################################

  clearCartItems(){
    this.cartApi.clearCart()
  }
 //##############################################################

  removeItem(item:any){
    this.cartApi.removeItem(item)
  }

   //##############################################################

  increase(){}

 //##############################################################

  decrease(){}

 //##############################################################

  checkout(){}

   //##############################################################

}
