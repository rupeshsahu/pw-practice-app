import { test, expect } from '@playwright/test';

test('recorded', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.locator('#inputEmail1').click();
  await page.locator('#inputEmail1').fill('rupesh@gmail.com');
  await page.locator('#inputEmail1').press('Tab');
  await page.locator('#inputPassword2').fill('rupesh123');
  await page.locator('#inputPassword2').press('Tab');
  await page.locator('.outer-circle').first().click();
  await page.locator('.inner-circle').first().click();
  await page.locator('nb-card').filter({ hasText: 'Using the' }).getByRole('button').click();
  await context.close();
  await browser.close();
  await page.locator('nb-card').filter({ hasText: 'LightON' }).locator('i').click();
  await page.locator('.svg-container > svg').first().click();
  await page.close();
});
