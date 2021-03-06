import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SweetNavComponent } from './sweet-nav/sweet-nav.component';
import { SweetVisionComponent } from './sweet-vision/sweet-vision.component';
import { SweetContactComponent } from './sweet-contact/sweet-contact.component';
import { SweetPWorkerComponent } from './sweet-p-worker/sweet-p-worker.component';
import { SweetProductComponent } from './sweet-product/sweet-product.component';
import { SweetBlogComponent } from './sweet-blog/sweet-blog.component';
import { SamplesComponent } from './samples/samples.component';
import { AppBoldDirective } from './app-bold.directive';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { SweetDataService } from './sweet-data.service';
import { SweetMessageService } from './sweet-message.service';
import { SweetToolsService } from './sweet-tools.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



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
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    MissionComponent,
    StoreComponent,
    AdminComponent,
    AdminhomeComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [SweetDataService, SweetMessageService, SweetToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
