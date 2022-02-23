import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  Categories = [
    {
      'title':'Main Category1'
    },
    {
      'title':'Main Category2'
    },
    {
      'title':'Main Category3'
    },
    {
      'title':'Main Category4'
    },
    {
      'title':'Main Category5'
    },
    {
      'title':'Main Category6'
    },
    {
      'title':'Main Category7'
    },
    {
      'title':'Main Category8'
    },
    {
      'title':'Main Category9'
    },
    {
      'title':'Main Category10'
    },
    {
      'title':'Main Category11'
    },
    {
      'title':'Main Category12'
    },
    {
      'title':'Main Category13'
    },
    {
      'title':'Main Category14'
    },
    {
      'title':'Main Category15'
    },
    {
      'title':'Main Category16'
    },
    {
      'title':'Main Category17'
    },
    {
      'title':'Main Category18'
    },
    {
      'title':'Main Category19'
    }

  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 8
      },
      940: {
        items: 11
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
