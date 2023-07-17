import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'
import { IngresaPage } from '../page-obejects/IngresaPage'

test.describe.parallel('Enable basic links', async () => {
  let homePage: HomePage
  let ingresaPage: IngresaPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.clickMasTardeButton()
  })

  test('Choose offertas link', async ({ page }) => {
    await homePage.clickOfertaCategory()
  })

  test('Choose historial link', async ({ page }) => {
    await homePage.clickHistorialCategory()
  })



  test.only("Click ingresa link", async ({page}) => {

    await homePage.clickIngresa()
    ingresaPage = new IngresaPage(page)
    await ingresaPage.clickNecesitoAyuda();
    const buttonExam = await page.locator("(//span[@class='andes-button__content'])[2]");
    buttonExam.click()    
    const newPage = await page.locator("//span[text()='Administrar y cancelar compras']")
  })

})
