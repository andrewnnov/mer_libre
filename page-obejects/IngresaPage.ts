import { Locator, Page, expect } from '@playwright/test'

export class IngresaPage {
  readonly page: Page
  readonly textFieldEmail: Locator
  readonly continuarButton: Locator
  readonly crearcuentaButton: Locator
  readonly robodeperdidoLink: Locator
  readonly robodecuentaLink: Locator
  readonly necesitoAyudaLink: Locator

  constructor(page: Page) {
    this.page = page
    this.textFieldEmail = page.locator('#user_id')
    this.continuarButton = page.locator(
      "//span[@class='andes-button__content' and text()='Continuar']",
    )
    this.continuarButton = page.locator(
      "//span[@class='andes-button__content' and text()='Crear cuenta']",
    )
    this.robodeperdidoLink = page.locator(
      "//span[@class='andes-list__item-primary' and text()='Robo o pérdida de teléfono']",
    )
    this.robodecuentaLink = page.locator(
      "//span[@class='andes-list__item-primary' and text()='Robo de cuenta']",
    )
    this.necesitoAyudaLink = page.locator(
      "//a[text()='Necesito ayuda con otros temas']",
    )
  }

  async clickNecesitoAyuda() {
    await this.necesitoAyudaLink.isVisible()
    await this.necesitoAyudaLink.click()
    await this.necesitoAyudaLink.isVisible()
  }
}
