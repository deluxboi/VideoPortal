import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild([
    { path: 'videos', component: VideoComponent }
      // { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  declarations: [
    VideoComponent,
  ],
  bootstrap: [ VideoComponent ]
})
export class VideoModule {}