import { expect, Locator, Page } from "@playwright/test";

export class CategoriasPage {
    readonly page: Page
    readonly moda: Locator
    readonly agro: Locator


    constructor(page: Page) {
        this.page = page
        this.moda = page.locator("//div[@class='nav-categs']//a[text()='Moda']")
        this.agro = page.locator("//div[@class='nav-categs']//a[text()='Agro']")
    }


    chooseCategory = async(category: string) => {
        await this.page.locator(`//div[@class='nav-categs']//a[text()='${category}']`).waitFor()
        await this.page.locator(`//div[@class='nav-categs']//a[text()='${category}']`).click()
    }

}