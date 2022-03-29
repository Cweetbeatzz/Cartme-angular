import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList:any[] = []
  productList = new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
    this.productList.asObservable()
  }

  setProducts(product:any){
    this.cartList.push(...product)
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartList.push(product)
    this.productList.next(this.cartList)
  }

  getTotalPrice(){
    let grandTotal = 0

    this.cartList.map((a:any)=>{
      grandTotal += a.total
    })
  }

  clearCart(product:any){
    this.cartList = []
    this.productList.next(this.cartList)
  }

  removeItem(product:any){
    this.cartList.map((a:any,index:any)=>{
      if (product.id === a.id) {
        this.cartList.splice(index,1)
      }
    })
  }
}
