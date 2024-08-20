import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogueProduitsComponent } from './catalogue-produits/catalogue-produits.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProduitComponent } from './produit/produit.component';
import { PanierComponent } from './panier/panier.component';

import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogueProduitsComponent,
    ContactComponent,
    AproposComponent,
    ProduitComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
