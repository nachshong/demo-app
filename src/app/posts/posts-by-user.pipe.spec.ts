import { PostsByUserPipe } from './posts-by-user.pipe';

describe('PostsByUserPipe', () => {
  it('create an instance', () => {
    const pipe = new PostsByUserPipe();
    expect(pipe).toBeTruthy();
  });
});
