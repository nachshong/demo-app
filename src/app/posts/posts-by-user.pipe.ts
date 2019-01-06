import { Pipe, PipeTransform } from '@angular/core';

import { Post } from './post'

@Pipe({
  name: 'postsByUser'
})
export class PostsByUserPipe implements PipeTransform {

  transform(value: Array<Post>, userId: number): Array<Post> {
    if (!value)
      return null;

    return value.filter((s) => {
      return !userId || s.userId == userId;
    });
  }
}