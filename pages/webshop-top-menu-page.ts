import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopTopMenuPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get logIn() {
    return this.page.getByRole('link', { name: 'Log in' });
  }

  get shoppingCart() {
    return this.page.getByRole('link', { name: 'Shopping cart*\n\n(*)' });
  }

  get myAccount() {
    return this.page.getByText('*@*');
  }

  get logOut() {
    return this.page.getByRole('link', { name: 'Log out' });
  }

  // ── Action / assertion methods ──
  async clickOnLoginButton(): Promise<void> {
    // TODO: 'Log in' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.logIn);
    // TODO: 'Log in' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.logIn);
  }

  async navigateToShoppingCartInTopMenuAndClickOnShoppingCart(): Promise<void> {
    // TODO: 'Shopping cart' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.shoppingCart);
  }

  async navigateToMyAccountByClickingOnEmailAtTopMenu(): Promise<void> {
    await this.myAccount.fill("x");
  }

  async clickOnLogOutInTopMenuPage(): Promise<void> {
    // TODO: 'Log out' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.logOut);
  }

  async waitUntilLoggedOut(): Promise<void> {
    // TODO: 'Log in' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.logIn);
  }
}
