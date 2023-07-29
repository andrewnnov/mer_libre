import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'

test.describe('Add items to cart', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.clickMasTardeButton()
  })

  test('Add item to cart without registration', async ({ page }) => {
    homePage.searchItem('Adidas')
    await page.pause()
  })
})
