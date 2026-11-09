import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import Scores365Page from '../support/pages/Scores365Page';

test.describe('365Scores - Testes E2E', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let scores365Page: Scores365Page;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.scores365')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    scores365Page = new Scores365Page(page);
    await scores365Page.acessarHome(BASE_URL);
  });

  test('CT01 - Deve carregar a página inicial com cabeçalho, logo e modalidades esportivas', async () => {
    await scores365Page.validarHomeCarregada();
  });

  test('CT02 - Deve navegar para a seção de Basquete pelo menu de modalidades', async () => {
    await scores365Page.navegarParaEsporte('Basquete', '/basketball');
  });

  test('CT03 - Deve pesquisar por um clube esportivo e exibir os resultados correspondentes', async () => {
    await scores365Page.buscarTermo('Flamengo');
    await scores365Page.validarResultadosBusca('Flamengo');
  });
});
