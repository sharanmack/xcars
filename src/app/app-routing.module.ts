import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [
//   // { path: 'card', component: CardComponent },
//   { path: 'about', component: CardComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'about', component: CardComponent },
  { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}