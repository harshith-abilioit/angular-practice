import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkComponent } from './work/work.component';
import { FormsModule } from '@angular/forms';
import { TestPipePipe } from './test-pipe.pipe';
import { RemoveNumsPipe } from './remove-nums.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SampleService } from './sample.service';
import { UsersComponent } from './users/users.component';
import { EachuserComponent } from './eachuser/eachuser.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path:"home",component:WorkComponent,
   children:[
    {path:"home1",component:Home1Component},
    {path:"home2",component:Home2Component},
   ]},
  {path:"about",component:AboutComponent},
  {path:"fakedata",component:ContactComponent},
  {path:"users",component:UsersComponent},
  {path:"user/:id",component:EachuserComponent},
  {path:"**",component:NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    TestPipePipe,
    RemoveNumsPipe,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    UsersComponent,
    EachuserComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
