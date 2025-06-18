import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from 'src/app/login/login';
import { AdminDashboard } from 'src/app/admin-dashboard/admin-dashboard';
import { EmployeeDashboard } from 'src/app/employee-dashboard/employee-dashboard';
import { AuthGuard } from 'src/app/auth-guard';
import { RoleGuard } from 'src/app/role-guard';
import { AddCustomer } from 'src/app/add-customer/add-customer';
import { AddProduct } from 'src/app/add-product/add-product';
import { MakeSale } from 'src/app/make-sale/make-sale';
import { ViewProducts } from 'src/app/view-products/view-products';
import { EditCustomer } from 'src/app/edit-customer/edit-customer';
import { EditProduct } from 'src/app/edit-product/edit-product';
import { Reports } from 'src/app/reports/reports';
import { ViewCustomers } from 'src/app/view-customers/view-customers';
import { DashboardSummary } from 'src/app/dashboard-summary/dashboard-summary';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  // ✅ Admin routes
  {
  path: 'admin',
  component: AdminDashboard,
  children: [
    { path: '', component: DashboardSummary },
    { path: 'add-customer', component: AddCustomer },
    { path: 'add-product', component: AddProduct },
    { path: 'view-customers', component: ViewCustomers },
    { path: 'view-products', component: ViewProducts },
    {
      path: 'reports',
      component: Reports,
      runGuardsAndResolvers: 'always' // 🔁 Forces reload
    }
  ]
},


  // ✅ Employee routes
  {
    path: 'employee',
    component: EmployeeDashboard,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'Employee' },
    children: [
      { path: '', redirectTo: 'add-customer', pathMatch: 'full' },
      { path: 'add-customer', component: AddCustomer },
      { path: 'make-sale', component: MakeSale },
      { path: 'view-products', component: ViewProducts },
      { path: 'view-customers', component: ViewCustomers }
    ]
  },

  // ✅ Edit routes
  { path: 'edit-customer/:id', component: EditCustomer, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: EditProduct, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
