import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { addMonths, format } from 'date-fns';

export async function logInScenario(
  page: Page,
  params: { URL: string; Email: string; Password: string }
): Promise<void> {
  await page.goto(params.URL);
  await page.waitForLoadState('networkidle');
  
  await page.waitForSelector('button:has-text("Login"), a:has-text("Login")', { state: 'visible' });
  
  await expect(page.locator('button:has-text("Login"), a:has-text("Login")')).toBeVisible();
  
  await page.locator('button:has-text("Login"), a:has-text("Login")').click();
  await page.waitForLoadState('networkidle');
  
  await page.locator('input[type="email"], input[name*="email" i], input[id*="email" i]').fill(params.Email);
  
  await page.locator('input[type="password"], input[name*="password" i], input[id*="password" i]').fill(params.Password);
  
  await page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Sign in")').click();
  await page.waitForLoadState('networkidle');
}

export async function orderProduct(
  page: Page,
  params: { ProductLinkName: string; Quantity: string }
): Promise<void> {
  await page.locator(`a:has-text("${params.ProductLinkName}"), button:has-text("${params.ProductLinkName}")`).click();
  await page.waitForLoadState('networkidle');
  
  await page.locator('a:has-text("Blue Jeans"), button:has-text("Blue Jeans")').click();
  await page.waitForLoadState('networkidle');
  
  await page.waitForSelector('.product-price, [class*="price"]', { state: 'visible' });
  
  await page.locator('input[name*="quantity" i], input[id*="quantity" i], input[type="number"]').fill(params.Quantity);
  
  await page.locator('button:has-text("Add to cart"), button:has-text("Add to Cart")').click();
  await page.waitForLoadState('networkidle');
}

export async function checkoutProcess(
  page: Page,
  params: { ShippingMethod: string; PaymentMethod: string }
): Promise<void> {
  await page.locator('button:has-text("Continue"), input[value*="Continue" i]').first().click();
  await page.waitForLoadState('networkidle');
  
  await page.locator('button:has-text("Continue"), input[value*="Continue" i]').first().click();
  await page.waitForLoadState('networkidle');
  
  await page.locator(`input[value="${params.ShippingMethod}"], label:has-text("${params.ShippingMethod}")`).click();
  
  await page.locator('button:has-text("Continue"), input[value*="Continue" i]').click();
  await page.waitForLoadState('networkidle');
  
  await page.locator(`input[value="${params.PaymentMethod}"], label:has-text("${params.PaymentMethod}")`).click();
  
  await page.locator('button:has-text("Continue"), input[value*="Continue" i]').click();
  await page.waitForLoadState('networkidle');
  
  await page.locator('select[name*="cardtype" i], select[id*="cardtype" i]').selectOption('Visa');
  
  await page.locator('input[name*="cardholder" i], input[id*="cardholder" i]').fill(faker.string.alpha(10));
  
  await page.locator('input[name*="cardnumber" i], input[id*="cardnumber" i]').fill('4485564059489345');
  
  await page.locator('select[name*="expiremonth" i], select[id*="expiremonth" i]').selectOption(format(addMonths(new Date(), 4), 'MM'));
  
  await page.locator('select[name*="expireyear" i], select[id*="expireyear" i]').selectOption(format(addMonths(new Date(), 0), 'yyyy'));
  
  await page.locator('input[name*="cardcode" i], input[id*="cardcode" i], input[name*="cvv" i]').fill(String(faker.number.int({ min: 100, max: 999 })));
  
  await page.locator('button:has-text("Continue"), input[value*="Continue" i]').click();
  await page.waitForLoadState('networkidle');
}

export async function confirmation(page: Page): Promise<void> {
  await page.locator('button:has-text("Confirm"), input[value*="Confirm" i]').click();
  await page.waitForLoadState('networkidle');
}