import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly categoriasLink: Locator
  readonly ofertasLink: Locator
  readonly historialLink: Locator
  readonly superMercadoLink: Locator
  readonly masTardeButton: Locator

  constructor(page: Page) {
    this.page = page
    this.masTardeButton = page.locator(
      "//div[@class='andes-tooltip__buttons']//span[contains(text(), 'Más tarde')]",
    )
    this.categoriasLink = page.locator(
      "//li[@class='nav-menu-item']//a[contains(text(), 'Categorías')]",
    )
    this.ofertasLink = page.locator(
      "//li[@class='nav-menu-item']//a[contains(text(), 'Ofertas')]",
    )
    this.historialLink = page.locator(
      "//li[@class='nav-menu-item']//a[contains(text(), 'Historial')]",
    )
    this.superMercadoLink = page.locator(
      "//li[@class='nav-menu-item']//a[contains(text(), 'Supermercado')]",
    )
  }

  async visit() {
    await this.page.goto('https://www.mercadolibre.com.ar/')
    //await this.page.waitForTimeout(10000);
  }

  clickMasTardeButton = async () => {
    await this.masTardeButton.click()    
  }

  async clickOfertaCategory() {
    await this.ofertasLink.waitFor()
    await this.ofertasLink.click()
    await this.page.waitForURL(/\/ofertas/, { timeout: 3000 })
  }

  async clickHistorialCategory() {
    await this.historialLink.waitFor()
    await this.historialLink.click()
    await this.page.waitForURL(/\/home/, { timeout: 3000 })
  }


}
