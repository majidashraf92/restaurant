import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppRestaurantComponent } from './app-restaurant/app-restaurant.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppDishesComponent } from './app-dishes/app-dishes.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';


const routes:Routes=[
{
  path:'login',
  component:LoginComponent
},
{
  path:'logout',
  component:LogoutComponent
},
{ 
 path:'restaurant', 
 component:AppRestaurantComponent,
 canActivate:[AuthGuard]
},
{
path:'menu',
component:AppMenuComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'register',
  component:RegisterComponent
}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 


}
export const routingComponents =[LoginComponent,LogoutComponent,AdminComponent,RegisterComponent,AppRestaurantComponent,AppMenuComponent,AppDishesComponent,]
