import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
    ProductsComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
