import { test } from '@playwright/test'
import { HomePage } from '../page-obejects/HomePage'

test.describe.parallel.only('Enable basic links', async () => {
  let homePage: HomePage

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


})
