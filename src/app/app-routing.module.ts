import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { SamplesComponent } from './samples/samples.component';
import { SweetContactComponent } from './sweet-contact/sweet-contact.component';
import { SweetBlogComponent } from './sweet-blog/sweet-blog.component';
import { SweetVisionComponent } from './sweet-vision/sweet-vision.component';
import { AppComponent } from './app.component';
import { SweetNavComponent } from './sweet-nav/sweet-nav.component';



const appRoutes: Routes = [
  {path: '', component: SweetVisionComponent},
  {path: 'contact', component: SweetContactComponent},
  {path: 'blog', component: SweetBlogComponent},
  {path: 'samples', component: SamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule] })


  export class AppRoutingModule { }
