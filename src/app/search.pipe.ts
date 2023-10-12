import { prodect } from './prodects';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(prodect:prodect[],searchword:string): prodect[] {
    return prodect.filter((prodect) => { return prodect.title.toLocaleLowerCase().includes(searchword.toLowerCase()); });
  }

}
