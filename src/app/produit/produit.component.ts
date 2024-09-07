import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { produitsService } from "../produits.services"

@Component({
  selector: 'app-produit',
  template:`
  <div class="fiche">
    <img src={{produit.image}} />
    <div id="ficheProduit">
            <h3>{{ produit.titre | uppercase}}</h3>
            <p><u><b>Description :</b></u> {{ produit.descriptionPlus}}</p>
            <p><u><b>Dimension :</b></u> {{ produit.dimension}}</p>
            <p><u><b>Matière :</b></u> {{ produit.matiere}}</p>
            <p><u><b>Prix :</b></u> {{ produit.prix }} €</p>
    </div>
  </div>

  ` ,
  styleUrl: './produit.component.css'
})
export class ProduitComponent {

  private route = inject(ActivatedRoute);
  produits:  any[]=[];
  produit: any;
  
  constructor(private produitsService: produitsService)  {}

  ngOnInit() {
    this.produits = this.produitsService.produits;
    this.route.params.subscribe( params => {
      this.produit = this.produits.find(produit => produit.id === +params ['id'])
   }) 
  }
}
