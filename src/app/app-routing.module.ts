import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppRestaurantComponent } from './app-restaurant/app-restaurant.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppDishesComponent } from './app-dishes/app-dishes.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


const routes:Routes=[
{path:'login',component:LoginComponent},
{path:'restaurant', component:AppRestaurantComponent},
{path:'menu',component:AppMenuComponent},
{path:'admin',component:AdminComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
export const routingComponents =[AppRestaurantComponent,AppMenuComponent,AppDishesComponent]
