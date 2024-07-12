import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './component/product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { SellerDashBoardComponent } from './customer/seller/seller-dash-board/seller-dash-board.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'contact-us', component: ContactComponent },
  {
    path: '',
    children: [
    { 
        path: 'admin-login', 
        component: LoginComponent 
    }],
  },
  {
    path: '',
    children: [
      {
        path: 'admin-dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin-dashboard/user',
        component: UserCrudComponent,
      },
      {
        path: 'admin/product',
        component: ProductComponent,
      },
    ],
  },
  {
    path:'',
    children:[
    {path:"signin",
        component:SigninSignupComponent
    },
    {
        path:"signup",
        component:SigninSignupComponent
    }
    ]
  },
  {
    path:'',
    children:[
        {
            path:"seller-dashboard",
            component:SellerDashBoardComponent
        },
        {
            path:"seller/product",
            component:ProductComponent
        }
    ]
  },
  {
    path: '',
    children: [
        {
            path:"buyer-dashboard",
            component:BuyerDashboardComponent
        },
        {
            path:"checkout",
            component:CheckoutComponent
        }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
