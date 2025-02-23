import { test, expect } from '@playwright/test';
// import { screenshotOnFailure } from './helper';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installationa' })).toBeVisible();

  await page.screenshot({ path: 'homepage-'+browserName+'.png', fullPage: true });
  // test.afterEach(screenshotOnFailure);
});