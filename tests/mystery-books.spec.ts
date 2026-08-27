import { test, expect } from '@playwright/test';

// This test is supposed to verify that searching for books in the
// "Mystery" category shows books with a price and a star rating.
// It is currently failing. Find all the bugs.

test('mystery books are displayed with price and rating', async ({ page }) => {
  await page.goto('https://books.toscrape.com');

  // Click the Mystery category
  await page.locator('.nav-list li a').click();

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Get all book items
  const books = await page.$$('li.col-xs-6');
  expect(books.length).toBeGreaterThan(0);

  // Check first book has a price
  const firstPrice = await books[0].innerText();
  expect(firstPrice).toContain('£');

  // Check first book has a rating
  const rating = await page.locator('.star-rating');
  expect(rating).toBe('One');

  // Check we are on the right page
  expect(page.url()).toBe('https://books.toscrape.com/mystery');
});
