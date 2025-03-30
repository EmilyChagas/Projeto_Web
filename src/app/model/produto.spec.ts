import { Produto } from './produto';

describe('Produto', () => {
  it('should create an instance', () => {
    const produto = new Produto(1, "Produto Teste", "Descrição do Produto Teste","Descrição detalhada do Produto Teste", 29.99, "url-imagem-teste.jpg");
    expect(produto).toBeTruthy();
  });
});
