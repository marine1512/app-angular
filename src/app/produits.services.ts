import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class produitsService {
    produits = [
        {
            "id": 1,
            "image": "./assets/produit_1.png",
            "titre": "Astérix",
            "description": "Figurine peinte à la main représentant le personnage de Astérix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 2,
            "image": "",
            "titre": "Idéfix",
            "description": "Figurine peinte à la main représentant le personnage de Idéfix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 3,
            "image": "",
            "titre": "Vercingétorix",
            "description": "Figurine peinte à la main représentant le personnage de Vercingétorix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 4,
            "image": "",
            "titre": "Assurancetourix",
            "description": "Figurine peinte à la main représentant le personnage de Assurancetourix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        }
    ];

constructor(){
    
    
}
}

