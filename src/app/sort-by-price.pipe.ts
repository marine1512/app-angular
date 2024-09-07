import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(produits: any [], sortOrder: string): any [] {
    if(sortOrder === 'asc')  {
      return produits.sort((a,b)=> { return a.prix - b.prix})
    } else  {
      return produits.sort((a,b)=> { return b.prix - a.prix})
    }

  }
}