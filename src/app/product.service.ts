import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products = [
    {
      id: 1,
      name: 'Macbook M3 Pro',
      desc: 'This mackbook has an apple silicon M3 Pro chip',
      availability: 'This is available in our physical store',
      img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Macbook M3',
      desc: 'This mackbook has an apple silicon M3 chip',
      availability: 'This is available in our physical store',
      img: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Macbook Air',
      desc: 'This mackbook has an apple silicon Air chip',
      availability: 'This is available in our physical store',
      img: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  getProducts(){
    return this.products;
  }

}
