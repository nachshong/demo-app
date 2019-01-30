import { Pipe, PipeTransform } from '@angular/core';

import { Post } from './post'
import { User } from '../users/user';

@Pipe({
  name: 'postsFilter',
  pure: false
})
export class PostsFilterPipe implements PipeTransform {

  private like(value: string, search: string) {
    return !search || value === search || value && value.toLowerCase().includes(search.toLowerCase());
  }

  transform(value: Array<Post>, user: number | string | User, title: string, body: string): Array<Post> {
    if (!value)
      return null;

    return value.filter((s) => {
      return (!user || s.userId == user || user instanceof User &&  s.userId == user.id || typeof user === 'string' && this.like(s.author, user))
        && this.like(s.title, title)
        && this.like(s.body, body);
    });
  }
}