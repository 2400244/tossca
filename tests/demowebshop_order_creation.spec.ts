import { test, expect } from '@playwright/test';
import { OpenurlPage } from '../pages/openurl-page';
import { TboxWaitPage } from '../pages/tbox-wait-page';
import { WebshopTopMenuPage } from '../pages/webshop-top-menu-page';
import { WebshopLogInPagePage } from '../pages/webshop-log-in-page-page';
import { TboxSetBufferPage } from '../pages/tbox-set-buffer-page';
import { WebshopProductsChoiceTabPage } from '../pages/webshop-products-choice-tab-page';
import { WebshopApparelShoesProductSelectionPage } from '../pages/webshop-apparel-shoes-product-selection-page';
import { WebshopBlueJeansPage } from '../pages/webshop-blue-jeans-page';
import { WebshopShoppingCartPage } from '../pages/webshop-shopping-cart-page';
import { WebshopBillingAddressPage } from '../pages/webshop-billing-address-page';
import { WebshopShippingAddressPage } from '../pages/webshop-shipping-address-page';
import { WebshopShippingMethodPage } from '../pages/webshop-shipping-method-page';
import { WebshopPaymentMethodsPage } from '../pages/webshop-payment-methods-page';
import { WebshopPaymentInformationCreditCardPage } from '../pages/webshop-payment-information-credit-card-page';
import { WebshopConfirmOrderPage } from '../pages/webshop-confirm-order-page';
import { WebshopOrderSuccessfulPage } from '../pages/webshop-order-successful-page';
import { WebshopMyAccountNavigationPage } from '../pages/webshop-my-account-navigation-page';
import { WebshopOrderDetailsPage } from '../pages/webshop-order-details-page';
import { ClosebrowserPage } from '../pages/closebrowser-page';
import { faker } from '@faker-js/faker';
import { format, addMonths, addYears } from 'date-fns';

test.describe('DemoWebShop_Order_Creation|Buiseness Parameters|RTB', () => {
  let openurlPage: OpenurlPage;
  let tboxWaitPage: TboxWaitPage;
  let webshopTopMenuPage: WebshopTopMenuPage;
  let webshopLogInPagePage: WebshopLogInPagePage;
  let tboxSetBufferPage: TboxSetBufferPage;
  let webshopProductsChoiceTabPage: WebshopProductsChoiceTabPage;
  let webshopApparelShoesProductSelectionPage: WebshopApparelShoesProductSelectionPage;
  let webshopBlueJeansPage: WebshopBlueJeansPage;
  let webshopShoppingCartPage: WebshopShoppingCartPage;
  let webshopBillingAddressPage: WebshopBillingAddressPage;
  let webshopShippingAddressPage: WebshopShippingAddressPage;
  let webshopShippingMethodPage: WebshopShippingMethodPage;
  let webshopPaymentMethodsPage: WebshopPaymentMethodsPage;
  let webshopPaymentInformationCreditCardPage: WebshopPaymentInformationCreditCardPage;
  let webshopConfirmOrderPage: WebshopConfirmOrderPage;
  let webshopOrderSuccessfulPage: WebshopOrderSuccessfulPage;
  let webshopMyAccountNavigationPage: WebshopMyAccountNavigationPage;
  let webshopOrderDetailsPage: WebshopOrderDetailsPage;
  let closebrowserPage: ClosebrowserPage;

  let capturedQuantityno: string;
  let capturedPrice: string;
  let capturedOrderNumber: string;
  let captured1: string;

  test.beforeEach(async ({ page }) => {
    test.setTimeout(120000);
    
    openurlPage = new OpenurlPage(page);
    tboxWaitPage = new TboxWaitPage(page);
    webshopTopMenuPage = new WebshopTopMenuPage(page);
    webshopLogInPagePage = new WebshopLogInPagePage(page);
    tboxSetBufferPage = new TboxSetBufferPage(page);
    webshopProductsChoiceTabPage = new WebshopProductsChoiceTabPage(page);
    webshopApparelShoesProductSelectionPage = new WebshopApparelShoesProductSelectionPage(page);
    webshopBlueJeansPage = new WebshopBlueJeansPage(page);
    webshopShoppingCartPage = new WebshopShoppingCartPage(page);
    webshopBillingAddressPage = new WebshopBillingAddressPage(page);
    webshopShippingAddressPage = new WebshopShippingAddressPage(page);
    webshopShippingMethodPage = new WebshopShippingMethodPage(page);
    webshopPaymentMethodsPage = new WebshopPaymentMethodsPage(page);
    webshopPaymentInformationCreditCardPage = new WebshopPaymentInformationCreditCardPage(page);
    webshopConfirmOrderPage = new WebshopConfirmOrderPage(page);
    webshopOrderSuccessfulPage = new WebshopOrderSuccessfulPage(page);
    webshopMyAccountNavigationPage = new WebshopMyAccountNavigationPage(page);
    webshopOrderDetailsPage = new WebshopOrderDetailsPage(page);
    closebrowserPage = new ClosebrowserPage(page);

    await page.goto('https://demowebshop.tricentis.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 60000 });

    await expect(webshopTopMenuPage.logIn).toBeVisible({ timeout: 30000 });
    await webshopTopMenuPage.logIn.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopLogInPagePage.email.fill('sr.Tester123@gmail.com');
    await webshopLogInPagePage.password.fill('Tester123');
    await webshopLogInPagePage.logIn.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
  });

  test('create order with discount code and verify order details', async ({ page }) => {
    test.setTimeout(120000);
    
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    capturedQuantityno = '23';

    await webshopProductsChoiceTabPage.selectProductName.selectOption('APPAREL & SHOES');
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopApparelShoesProductSelectionPage.blueJeans.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    capturedPrice = await webshopBlueJeansPage.price.textContent() ?? '';
    await webshopBlueJeansPage.quantity.fill('23');
    await webshopBlueJeansPage.addToCart.click();

    await page.waitForTimeout(2000);
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopTopMenuPage.shoppingCart.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopShoppingCartPage.enterDiscountCode.fill('AutomationDiscount2');
    await webshopShoppingCartPage.applyCoupon.click();
    await page.waitForTimeout(2000);
    await expect(webshopShoppingCartPage.giftCardCouponCode).toBeVisible({ timeout: 30000 });
    await webshopShoppingCartPage.termsOfService.check();
    await webshopShoppingCartPage.checkout.click();

    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopBillingAddressPage.continue.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopShippingAddressPage.continue.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopShippingMethodPage.continue.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopPaymentMethodsPage.creditCard.check();
    await webshopPaymentMethodsPage.continue.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    const futureDate = addMonths(new Date(), 6);
    const cardholderName = faker.person.fullName();
    const cardNumber = '4111111111111111';
    const expirationMonth = format(futureDate, 'MM');
    const expirationYear = format(futureDate, 'yyyy');
    const cvv = faker.string.numeric(3);

    await webshopPaymentInformationCreditCardPage.cardholderName.fill(cardholderName);
    await webshopPaymentInformationCreditCardPage.cardNumber.fill(cardNumber);
    await webshopPaymentInformationCreditCardPage.expirationMonth.selectOption(expirationMonth);
    await webshopPaymentInformationCreditCardPage.expirationYear.selectOption(expirationYear);
    await webshopPaymentInformationCreditCardPage.cardCode.fill(cvv);
    await webshopPaymentInformationCreditCardPage.continue.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopConfirmOrderPage.confirm.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await expect(webshopOrderSuccessfulPage.orderSuccessMessage).toBeVisible({ timeout: 30000 });
    capturedOrderNumber = await webshopOrderSuccessfulPage.orderNumber.textContent() ?? '';

    await webshopTopMenuPage.userEmail.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await webshopMyAccountNavigationPage.orders.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    await page.locator(`text=${capturedOrderNumber}`).first().click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    const orderDetailsQuantity = await webshopOrderDetailsPage.quantity.textContent() ?? '';
    const orderDetailsPrice = await webshopOrderDetailsPage.price.textContent() ?? '';

    await expect(orderDetailsQuantity).toContain(capturedQuantityno);
    await expect(orderDetailsPrice).toContain(capturedPrice);
  });
});