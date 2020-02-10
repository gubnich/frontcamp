import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new FilterPipe();
    const arrItem = {
      title: 'AbraCAdabrA'
    }
    const array = [arrItem]
    const exp = pipe.transform(array, 'abra')
    const res = exp.every(item => item.title = arrItem.title)
    expect(res).toBe(true);
  });
});
