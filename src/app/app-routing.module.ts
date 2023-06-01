import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboradComponent } from './admin/dashborad/dashborad.component';
import { ProductsComponent } from './admin/products/products.component';
import { LayoutHoneComponent } from './layout/layout-hone/layout-hone.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
const routes: Routes = [
  // ứng dụng phía khách
  {
    path: '',
    component: LayoutHoneComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  // Ứng dụng phía admin
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboradComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
