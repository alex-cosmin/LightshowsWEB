import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { ProductDetailsComponent } from './body/product-details/product-details.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    ProductDetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
