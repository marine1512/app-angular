import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class produitsService {
    produits = [
        {
            "id": 1,
            "image": "produit_1.png",
            "titre": "Astérix",
            "description": "Figurine peinte à la main représentant le personnage de Astérix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 10,
            
        },
        {
            "id": 2,
            "image": "produit_2.png",
            "titre": "Idéfix",
            "description": "Figurine peinte à la main représentant le personnage de Idéfix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 9
        },
        {
            "id": 3,
            "image": "produit_3.webp",
            "titre": "Vercingétorix",
            "description": "Figurine peinte à la main représentant le personnage de Vercingétorix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 11
        },
        {
            "id": 4,
            "image": "produit_4.webp",
            "titre": "Assurancetourix",
            "description": "Figurine peinte à la main représentant le personnage de Assurancetourix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 11
        }
    ];

constructor(){
    
    
}
}

