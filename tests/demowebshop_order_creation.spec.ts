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
  });

  test('35269|DE and Verify Order Details', async ({ page }) => {
    await openurlPage.openURL('https://demowebshop.tricentis.com/');
    await tboxWaitPage.waitForPageLoad();
    await webshopTopMenuPage.clickLoginLink();
    await webshopLogInPagePage.enterEmail('testuser@example.com');
    await webshopLogInPagePage.enterPassword('password123');
    await webshopLogInPagePage.clickLoginButton();
    await tboxSetBufferPage.setBuffer('2000');
    await webshopProductsChoiceTabPage.clickApparelShoes();
    await webshopApparelShoesProductSelectionPage.clickBlueJeans();
    await webshopBlueJeansPage.enterQuantity('2');
    capturedQuantityno = await webshopBlueJeansPage.getQuantity();
    await webshopBlueJeansPage.clickAddToCart();
    await webshopShoppingCartPage.clickShoppingCart();
    capturedPrice = await webshopShoppingCartPage.getUnitPrice();
    await webshopShoppingCartPage.checkTermsOfService();
    await webshopShoppingCartPage.clickCheckout();
    await webshopBillingAddressPage.selectCountry('Germany');
    await webshopBillingAddressPage.enterCity(faker.location.city());
    await webshopBillingAddressPage.enterAddress1(faker.location.streetAddress());
    await webshopBillingAddressPage.enterZipCode(faker.location.zipCode());
    await webshopBillingAddressPage.enterPhoneNumber(faker.phone.number());
    await webshopBillingAddressPage.clickContinue();
    await webshopShippingAddressPage.clickContinue();
    await webshopShippingMethodPage.clickContinue();
    await webshopPaymentMethodsPage.selectCreditCard();
    await webshopPaymentMethodsPage.clickContinue();
    
    const futureDate = addMonths(new Date(), 6);
    const cardholderName = faker.person.fullName();
    const cardNumber = faker.finance.creditCardNumber();
    const expirationMonth = format(futureDate, 'MM');
    const expirationYear = format(addYears(futureDate, 2), 'yyyy');
    const cardCode = faker.finance.creditCardCVV();
    
    await webshopPaymentInformationCreditCardPage.enterCardholderName(cardholderName);
    await webshopPaymentInformationCreditCardPage.enterCardNumber(cardNumber);
    await webshopPaymentInformationCreditCardPage.selectExpirationMonth(expirationMonth);
    await webshopPaymentInformationCreditCardPage.selectExpirationYear(expirationYear);
    await webshopPaymentInformationCreditCardPage.enterCardCode(cardCode);
    await webshopPaymentInformationCreditCardPage.clickContinue();
    await webshopConfirmOrderPage.clickConfirm();
    
    capturedOrderNumber = await webshopOrderSuccessfulPage.getOrderNumber();
    await webshopMyAccountNavigationPage.clickMyAccount();
    await webshopMyAccountNavigationPage.clickOrders();
    await webshopOrderDetailsPage.clickOrderDetails(capturedOrderNumber);
    
    const orderDetailsQuantity = await webshopOrderDetailsPage.getOrderQuantity();
    const orderDetailsPrice = await webshopOrderDetailsPage.getOrderPrice();
    
    expect(orderDetailsQuantity).toBe(capturedQuantityno);
    expect(orderDetailsPrice).toBe(capturedPrice);
    
    await closebrowserPage.closeBrowser();
  });
});
