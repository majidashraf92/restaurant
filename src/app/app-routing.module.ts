import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppRestaurantComponent } from './app-restaurant/app-restaurant.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppDishesComponent } from './app-dishes/app-dishes.component';


const routes:Routes=[
{path:'restaurant', component:AppRestaurantComponent},
{path:'menu',component:AppMenuComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents =[AppRestaurantComponent,AppMenuComponent,AppDishesComponent]
