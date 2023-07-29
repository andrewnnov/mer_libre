import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'
import { AyudaPage } from '../page-obejects/AyudaPage'

test.describe.parallel('ayuda', async () => {
  let homePage: HomePage
  let ayudaPage: AyudaPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.clickMasTardeButton()
  })

  test('Choose ayuda link', async ({ page }) => {
    await homePage.clickAyudaCategory()
    ayudaPage = new AyudaPage(page)
    await ayudaPage.gotoAyuda()
  })
})
