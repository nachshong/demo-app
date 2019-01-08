import { Pipe, PipeTransform } from '@angular/core';

import { Post } from './post'

@Pipe({
  name: 'postsFilter',
  pure: false
})
export class PostsFilterPipe implements PipeTransform {

  transform(value: Array<Post>, userId: number, title: string, body: string): Array<Post> {
    if (!value)
      return null;

    return value.filter((s) => {
      return (!userId || s.userId == userId)
        && (!title || s.title && s.title.toUpperCase().indexOf(title.toUpperCase()) >= 0)
        && (!body || s.body && s.body.toUpperCase().indexOf(body.toUpperCase()) >= 0);
    });
  }
}