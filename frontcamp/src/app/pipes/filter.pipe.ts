import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array, value): any {
    return array.filter(item => item.title.includes(value));
  }
}
