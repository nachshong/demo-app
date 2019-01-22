import { Pipe, PipeTransform } from '@angular/core';

import { Post } from './post'
import { User } from '../users/user';

@Pipe({
  name: 'postsFilter',
  pure: false
})
export class PostsFilterPipe implements PipeTransform {

  transform(value: Array<Post>, user: number | User, title: string, body: string): Array<Post> {
    if (!value)
      return null;

    return value.filter((s) => {
      return (!user || s.userId == user || user instanceof User &&  s.userId == user.id)
        && (!title || s.title && s.title.toUpperCase().indexOf(title.toUpperCase()) >= 0)
        && (!body || s.body && s.body.toUpperCase().indexOf(body.toUpperCase()) >= 0);
    });
  }
}