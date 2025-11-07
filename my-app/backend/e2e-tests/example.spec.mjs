import { test, expect } from '@playwright/test';

test('homepage loads and shows Bloglist', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Blogs');
  await expect(page.getByText('log in')).toBeVisible();
});

test('login form appears and contains expected fields/buttons', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'log in' }).click();
  await expect(page.getByText('username')).toBeVisible();
  await expect(page.getByText('password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'login' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'cancel' })).toBeVisible();
});
