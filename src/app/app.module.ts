import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SweetNavComponent } from './sweet-nav/sweet-nav.component';
import { SweetVisionComponent } from './sweet-vision/sweet-vision.component';
import { SweetContactComponent } from './sweet-contact/sweet-contact.component';
import { SweetPWorkerComponent } from './sweet-p-worker/sweet-p-worker.component';
import { SweetProductComponent } from './sweet-product/sweet-product.component';
import { SweetBlogComponent } from './sweet-blog/sweet-blog.component';
import { SamplesComponent } from './samples/samples.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    SweetNavComponent,
    SweetVisionComponent,
    SweetContactComponent,
    SweetPWorkerComponent,
    SweetProductComponent,
    SweetBlogComponent,
    SamplesComponent,
      ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
