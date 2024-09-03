import { Component } from '@angular/core';
import { produitsService } from '../produits.services';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits: any[] = [];
  sortOrder: string = 'asc';
  constructor(private produitsService: produitsService) {}
  ngOnInit() {
    this.produits = this.produitsService.produits;
  }
  setOrder(order:string)  {
    this.sortOrder = order;
  }
}
