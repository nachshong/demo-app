import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postsByUser'
})
export class PostsByUserPipe implements PipeTransform {

  transform(value: any, userId: number): any {
    if (!value)
      return null;

    return value.filter((s: any) => {
      return !userId || s.userId == userId;
    });
  }

}
