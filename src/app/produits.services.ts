import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class produitsService {
    produits = [
        {
            "id": 1,
            "titre": "Astérix",
            "description": "Figurine peinte à la main représentant le personnage de Astérix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 2,
            "titre": "Idéfix",
            "description": "Figurine peinte à la main représentant le personnage de Idéfix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 3,
            "titre": "Vercingétorix",
            "description": "Figurine peinte à la main représentant le personnage de Vercingétorix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        },
        {
            "id": 4,
            "titre": "Assurancetourix",
            "description": "Figurine peinte à la main représentant le personnage de Assurancetourix.",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": "10€"
        }
    ];

constructor(){}
}