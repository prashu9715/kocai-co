import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderNavComponent } from './custom-components/header-nav/header-nav.component';
import { AutoCloseDirective } from './modules/shared-module/directives/autoclose.directive';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';
import { FooterComponent } from './custom-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderNavComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
