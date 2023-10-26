import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}