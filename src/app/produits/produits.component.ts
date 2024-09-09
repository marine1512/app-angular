import { Component } from '@angular/core';
import { produitsService } from '../produits.services';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits: any[] = []; // Création d'un tableau pour les produits.
  sortOrder: string = 'asc'; // Fonction pour le tri par prix. 
  searchTerm: string = ''; // Fonction de recherche.
  constructor(private produitsService: produitsService) {}
  ngOnInit() {
    this.produits = this.produitsService.produits;
  }
  setOrder(order:string)  {
    this.sortOrder = order; // Tri du tableau.
  }
}