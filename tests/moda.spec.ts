import {test} from "@playwright/test"
import { HomePage } from "../page-obejects/HomePage"


test.describe.parallel.only('Moda', async() => {
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        homePage.visit()
        homePage.clickMasTardeButton()
    })
}

)