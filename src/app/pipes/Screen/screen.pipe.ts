import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'screen'
})
export class ScreenPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(text => {
      return text.status.toLocaleLowerCase().includes(searchText);
    });
  }

}
