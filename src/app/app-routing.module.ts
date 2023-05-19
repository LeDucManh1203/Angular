import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutAdminComponent } from './components/dayouts/layout-admin/layout-admin.component';
import { LayoutComponent } from './components/dayouts/layout/layout.component';
import { DashboradComponent } from './pages/admin/dashborad/dashborad.component';
import { ProductsComponent } from './pages/admin/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'login', component: LoginComponent },

    ]
  },
  // phias admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashborad', pathMatch: 'full' },
      { path: 'dashborad', component: DashboradComponent },
      { path: 'products', component: ProductsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
