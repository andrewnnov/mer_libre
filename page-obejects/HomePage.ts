import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly categoriasLink: Locator
  readonly ofertasLink: Locator
  readonly historialLink: Locator
  readonly superMercadoLink: Locator
  readonly masTardeButton: Locator
  readonly searchField: Locator
  readonly searchIconButton: Locator
  readonly ayudaButton: Locator
  readonly ingresaLink: Locator
  readonly moda: Locator
  readonly vender: Locator

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

    this.ayudaButton = page.locator(
      "//li[@class='nav-menu-item']//a[contains(text(), 'Ayuda')]",
    )

    this.ingresaLink = page.locator(
      "//nav[@id='nav-header-menu']//a[text()='Ingresá']",
    )

    this.moda = page.locator("//nav[@id='nav-header-menu']//a[text()='Moda']")

    this.searchField = page.locator("//input[@class='nav-search-input']")
    this.searchIconButton = page.locator("//div[@class='nav-icon-search']")
  }

  async visit() {
    await this.page.goto('https://www.mercadolibre.com.ar/')
    //await this.page.waitForTimeout(10000);
  }

  clickMasTardeButton = async () => {
    await this.masTardeButton.click()
  }

  async clickCategoriasLink() {
    await this.categoriasLink.waitFor()
    await this.categoriasLink.hover()
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

  async clickAyudaCategory() {
    await this.ayudaButton.waitFor()
    await this.ayudaButton.click()
    await this.page.waitForURL(/\/ayuda/, { timeout: 3000 })
  }

  async clickIngresa() {
    await this.ingresaLink.waitFor()
    await this.ingresaLink.click()
    await this.page.waitForURL(/\/login/, { timeout: 3000 })
  }

  async searchItem(item: string) {
    await this.searchField.waitFor()
    await this.searchField.type(item)
    await this.searchIconButton.click()
  }
}
