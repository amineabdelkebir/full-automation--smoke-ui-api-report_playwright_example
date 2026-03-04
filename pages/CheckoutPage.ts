import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }
}