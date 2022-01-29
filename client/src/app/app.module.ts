import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PlayPageComponent } from './play-page/play-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    PlayPageComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
