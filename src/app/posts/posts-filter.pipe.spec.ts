import { PostsFilterPipe } from './posts-filter.pipe'

describe('PostsByUserPipe', () => {
  it('create an instance', () => {
    const pipe = new PostsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
