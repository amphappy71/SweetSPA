import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SamplesComponent } from './samples/samples.component';
import { SweetContactComponent } from './sweet-contact/sweet-contact.component';
import { SweetBlogComponent } from './sweet-blog/sweet-blog.component';


const appRoutes: Routes = [
  {path: '', component: SamplesComponent},
  {path: 'contact', component: SweetContactComponent},
  {path: 'blog', component: SweetBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule] })


  export class AppRoutingModule { }
