import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class Scores365Elements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  getHeader(): Locator {
    return this.page.locator('header[class*="site-header"]');
  }

  getHeaderLogo(): Locator {
    return this.page.locator('header a[class*="main_logo"]');
  }

  getSearchButton(): Locator {
    return this.page.locator('header button[class*="search_button"]');
  }

  getSearchInput(): Locator {
    return this.page.getByPlaceholder('Campeonato, time ou jogadores');
  }

  getSearchContainer(): Locator {
    return this.page
      .locator(
        '.new-search-widget_container__TLk4i, .website_search_content__67Dsc, [class*="search_content"]'
      )
      .first();
  }

  getSearchResultItem(termo: string): Locator {
    return this.page.locator('a').filter({ hasText: termo }).first();
  }

  getSportLink(sportName: string): Locator {
    return this.page.getByRole('link', { name: sportName, exact: true });
  }

  getActiveSportItem(): Locator {
    return this.page.locator('header a[class*="sport_active_item"]');
  }
}
