import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users } from '../../test-data/users';

test('@smoke User can complete purchase', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  // Add product
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.goToCart();

  // Checkout
  await checkoutPage.startCheckout();
  await checkoutPage.fillInformation('Amine', 'Test', '1000');
  await checkoutPage.finishOrder();

  // Verify success
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});