import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {PostsModule} from '../posts/posts.module';
import {registerLocaleData} from '@angular/common';
import localePL from '@angular/common/locales/pl'

registerLocaleData(localePL)

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    PostsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl'
    }
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }
