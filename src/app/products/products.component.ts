import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products = [
    {
      'img':'./assets/img/product-one.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-two.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-three.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-one.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-two.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-three.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-one.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-two.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-three.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-one.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-two.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    },
    {
      'img':'./assets/img/product-three.jpeg',
      'old_price':'0.0',
      'price':'0.0',
      'desc':'Commercial or professional procedures that are accepted or prescribed as being',
      'distance':'3Km'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
