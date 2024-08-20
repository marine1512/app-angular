import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "Contact", component: ContactComponent},
  { path: "APropos", component: AproposComponent },
  { path: "Panier", component: PanierComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
