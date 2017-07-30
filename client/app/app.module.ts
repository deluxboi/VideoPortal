import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginModule } from './LoginComponent/login.module';
import { VideoModule } from './videos/video.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { VideoService } from './videos/video.service';
import { Md5 } from 'ts-md5/dist/md5';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    LoginModule,
    VideoModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent }
      // { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [
  	AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    VideoService,
    Md5
  ]
})
export class AppModule {}