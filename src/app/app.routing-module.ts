import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './user/user/user.component';
import { RegisterComponent } from './auth/register/register.component';
// import { CommonModule } from '@angular/common';

const ruotes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  // especificamos rutas principales
  imports: [RouterModule.forRoot(ruotes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}