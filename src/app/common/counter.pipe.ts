import { Pipe, PipeTransform } from '@angular/core';

import { ByRefValue } from './by-ref-value';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: Array<any>, result: ByRefValue<number>): any {
    result.value = value ? value.length : 0;
    return value;
  }

}
