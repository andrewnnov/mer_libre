import { test, Page, Locator } from '@playwright/test'

export class AyudaPage {
  readonly page: Page
  button: Locator

  constructor(page: Page) {
    this.page = page
  }

  async gotoAyuda() {
    await this.page.pause()
  }
}
