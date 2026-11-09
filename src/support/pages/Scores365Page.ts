import { Page, expect } from '@playwright/test';
import Scores365Elements from '../elements/Scores365Elements';
import BasePage from './BasePage';

export default class Scores365Page extends BasePage {
  readonly elements: Scores365Elements;

  constructor(readonly page: Page) {
    super(page);
    this.elements = new Scores365Elements(page);
  }

  async acessarHome(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async validarHomeCarregada(): Promise<void> {
    await expect(this.page).toHaveURL(/365scores\.com\/pt-br/);
    await expect(this.page).toHaveTitle(/365Scores/i);
    await expect(this.elements.getHeader()).toBeVisible();
    await expect(this.elements.getHeaderLogo()).toBeVisible();
    await expect(this.elements.getSportLink('Futebol')).toBeVisible();
  }

  async navegarParaEsporte(
    nomeEsporte: string,
    rotaEsperada: string
  ): Promise<void> {
    const linkEsporte = this.elements.getSportLink(nomeEsporte);
    await expect(linkEsporte).toBeVisible();
    await linkEsporte.click();
    await expect(this.page).toHaveURL(new RegExp(rotaEsperada));
  }

  async buscarTermo(termo: string): Promise<void> {
    const botaoBusca = this.elements.getSearchButton();
    await expect(botaoBusca).toBeVisible();
    await botaoBusca.click();

    const campoBusca = this.elements.getSearchInput();
    await expect(campoBusca).toBeVisible();
    await campoBusca.fill(termo);
  }

  async validarResultadosBusca(termoEsperado: string): Promise<void> {
    const itemResultado = this.elements.getSearchResultItem(termoEsperado);
    await expect(itemResultado).toBeVisible();
    await expect(itemResultado).toContainText(termoEsperado);
  }
}
