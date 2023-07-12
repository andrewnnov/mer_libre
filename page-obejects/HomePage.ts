import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly masTardeButton: Locator

  constructor(page: Page) {
    this.page = page
    this.masTardeButton = page.locator("//div[@class='andes-tooltip__buttons']//span[contains(text(), 'Más tarde')]")
  }

  async visit() {
    await this.page.goto("https://www.mercadolibre.com.ar/")
    //await this.page.waitForTimeout(10000);
  }

  clickMasTardeButton = async () => {
    await this.masTardeButton.click();
    await this.page.pause();
  }

}
