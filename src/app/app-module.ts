import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { EmployeeDashboard } from './employee-dashboard/employee-dashboard';
import { Customer } from 'src/app/customer';
import { Product } from 'src/app/product';
import { AddCustomer } from './add-customer/add-customer';
import { AddProduct } from './add-product/add-product';
import { MakeSale } from './make-sale/make-sale';
import { ViewProducts } from './view-products/view-products';
import { EditCustomer } from './edit-customer/edit-customer';
import { EditProduct } from './edit-product/edit-product';
import { Reports } from './reports/reports';
import { ViewCustomers } from './view-customers/view-customers';
import { DashboardSummary } from './dashboard-summary/dashboard-summary';


@NgModule({
  declarations: [
    App,
    Login,
    AdminDashboard,
    EmployeeDashboard,
    AddCustomer,
    AddProduct,
    MakeSale,
    ViewProducts,
    EditCustomer,
    EditProduct,
    Reports,
    ViewCustomers,
    DashboardSummary
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
