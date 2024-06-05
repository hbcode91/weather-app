import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metersToKm'
})
export class MetersToKmPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value === null || value === undefined) {
      return '---';
    } else {
      return value / 1000;
    }
  }

}
