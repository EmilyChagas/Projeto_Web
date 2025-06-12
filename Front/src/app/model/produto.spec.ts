import { Produto } from './produto';

describe('Produto', () => {
  it('should create an instance', () => {
    const produto = new Produto( );
    expect(produto).toBeTruthy();
  });
});
