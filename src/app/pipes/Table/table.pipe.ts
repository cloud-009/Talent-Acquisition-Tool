import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(text => {
      return text.jobTitle.toLocaleLowerCase().includes(searchText) || text.description.toLocaleLowerCase().includes(searchText);
    });
  }

}
