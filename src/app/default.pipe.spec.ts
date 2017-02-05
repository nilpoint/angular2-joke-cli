/* tslint:disable:no-unused-variable */
import { DefaultPipe } from './default.pipe';

describe('Pipe: Default', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://image.home/200')).toBe('http://image.home/200');
  });
});
