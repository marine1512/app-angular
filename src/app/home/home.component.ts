import { Component } from '@angular/core';
import { produitsService } from '../produits.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produits: any[] = [];
  constructor(private produitsService: produitsService) {}
  ngOnInit() {
    this.produits = this.produitsService.produits;
  }
}



