import { test, expect } from '@playwright/test';
const UI_URL = 'http://localhost:5173/';
import path from 'path';
test.beforeEach(async ({ page }) => {
  await page.goto(UI_URL);
  // get the sign in button
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  // find email textbox and fill the email
  await page.locator('[name=email]').fill('1@1.com');
  await page.locator('[name=password]').fill('password123'); // creating new user for the test

  // now click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Sign in Succesful!')).toBeVisible();
});

test('should allow users to add hotels', async ({ page }) => {
  await page.goto(`${UI_URL}add-hotel`);

  await page.locator('[name="name"]').fill('Test Hotel');
  await page.locator('[name="city"]').fill('test city');
  await page.locator('[name="country"]').fill('test country');
  await page
    .locator('[name="description"]')
    .fill('this is a description for hotel');

  await page.locator('[name="pricePerNight"]').fill('100');
  await page.selectOption('select[name="starRating"]', '3');

  await page.getByText('Budget').click();
  await page.getByLabel('Free Wifi').check();
  await page.getByLabel('Parking').check();

  await page.locator('[name="adultCount"]').fill('2');
  await page.locator('[name="childCount"]').fill('4');

  await page.setInputFiles('[name="imageFiles"]', [
    path.join(__dirname, 'files', '1.jpg'),
    path.join(__dirname, 'files', '2.jpg'),
  ]);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Hotel Saved')).toBeVisible();
});
