import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { RegisterPageComponent } from "./register-page/register-page.component";
import {PlayPageComponent} from "./play-page/play-page.component";
import { AuthLayoutComponent } from "./shared/layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/register', pathMatch: 'full'},
      {path: 'register', component: RegisterPageComponent},
      {path: 'play', component: PlayPageComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}