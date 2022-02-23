import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showCat(){
    // /$(".dropdown-menu").show(300);
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
