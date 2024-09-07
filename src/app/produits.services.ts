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
            "titre": "Obélix",
            "description": "Figurine peinte à la main représentant le personnage de Obélix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 11
        },
        {
            "id": 4,
            "image": "produit_4.png",
            "titre": "Obélix",
            "description": "Figurine peinte à la main représentant le personnage de Obélix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 8
        },
        {
            "id": 5,
            "image": "produit_5.webp",
            "titre": "Astérix",
            "description": "Figurine peinte à la main représentant le personnage de Astérix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 10
        },
        {
            "id": 6,
            "image": "produit_6.webp",
            "titre": "Astérix",
            "description": "Figurine peinte à la main représentant le personnage de Astérix.",
            "descriptionPlus":"Figurine du personnage Astérix de la célèbre bande déssinée Astérix et Obélix. En 1959, deux français, le scénariste René Goscinny et le dessinateur Albert Uderzo, ont donné naissance à une saga de bande dessinée légendaire qui a su traverser les décennies et les générations : Astérix (anciennement Astérix le Gaulois). ",
            "dimension": "30cm",
            "matiere": "PVC",
            "prix": 10
        }
    ];

constructor(){
    
    
}
}

