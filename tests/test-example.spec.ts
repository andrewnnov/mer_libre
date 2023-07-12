import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'

test.describe.only('Test', async () => {
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    await homePage.visit()
  })

  test("Click mas tarde", async ({page}) => {
    await homePage.clickMasTardeButton();
  })  
})
