import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'
import { CategoriasPage } from '../page-obejects/CategoriasPage'

test.describe.parallel.only('Moda', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    homePage.visit()
    homePage.clickMasTardeButton()
  })

  test('Choose new boots', async ({ page }) => {
    //choose categorias
    await homePage.clickCategoriasLink()

    //choose moda
    const categoriasPage = new CategoriasPage(page)
    await categoriasPage.chooseCategory('Moda')
    await page.pause()

    //choose hombre
    //choose Precio 8000 - 12000
    //choose Marca Topper
    //choose Categorias - Pantalones
    //get list of pantalones
  })
})
