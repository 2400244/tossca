import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class TboxWaitPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async tboxWait(seconds: number): Promise<void> {
    await this.page.waitForTimeout(seconds * 1000);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}