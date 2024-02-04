import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService{
  
  constructor() { }
  

  bagProducts : any[] = [];
  totalPrice : number = 0;
  womenProducts = [
    { id:1, name: 'Qutie Halloween Fuzzy Trim Belted Overcoat', price: 25, image: 'assets/images/Women-1.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
    { id:2, name: 'Borg Collar Belted PU Leather Moto Jacket', price: 35, image: 'assets/images/Women-2.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true },
    { id:3, name: 'Frenchy Lapel Neck Double Breasted Overcoat', price: 35, image: 'assets/images/Women-3.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true },
  ];

  menProducts = [
    { id:1, name: 'Manfinity Mode Men 1pc Single Breasted Overcoat', price: 35, image: 'assets/images/Men-1.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true },
    { id:2, name: 'Manfinity Mode Men Lapel Neck Patched Pocket Overcoat', price: 49, image: 'assets/images/Men-2.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false },
    { id:3, name: 'Mens Stand Collar Long Sleeve Single Breasted Woolen Coat', price: 17, image: 'assets/images/Men-3.webp', size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true },
  ];
  
  addToBag(product: any): void {
    this.bagProducts.push(product);
  }

  sumPrice() : void{
    this.totalPrice = 0;
    for (let product of this.bagProducts){
      this.totalPrice += product.price;
    }
    console.log(this.totalPrice)
  }
}
