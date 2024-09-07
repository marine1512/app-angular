import { Component } from '@angular/core';
import { produitsService } from '../produits.services';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits: any[] = [];
  sortOrder: string = 'asc';
  searchTerm: string = '';
  constructor(private produitsService: produitsService) {}
  ngOnInit() {
    this.produits = this.produitsService.produits;
  }
  setOrder(order:string)  {
    this.sortOrder = order;
  }
}
