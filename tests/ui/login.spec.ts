import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('Login Tests', () => {

  test('@smoke User can login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);
  });


  test('User cannot login with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});