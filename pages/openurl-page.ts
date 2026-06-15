import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class OpenurlPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openURL(url: string): Promise<void> {
    await this.page.goto(url);
  }
}