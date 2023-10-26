import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';   
import { WebappComponent } from './webapp/webapp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';





@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    NavbarComponent,
    IntroComponent,
    CardComponent,
    FooterComponent,
    OffcanvasComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,



 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   