import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRestaurantComponent } from './app-restaurant/app-restaurant.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppDishesComponent } from './app-dishes/app-dishes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRestaurantComponent,
    AppMenuComponent,
    AppDishesComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
