import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl'
import {SharedModule} from '../shared/shared.module';
import { MenuComponent } from './component/menu/menu.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    SignInPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
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
