import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomePageComponent} from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutPageComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Projects'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactPageComponent, data: {title: 'Contact'}},
  {path: 'contact/contact-list', component: ContactsPageComponent, data: {title: 'Contact List'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
