import {test} from "@playwright/test"
import { HomePage } from "../page-obejects/HomePage"


test.describe.parallel.only('Moda', async() => {
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        homePage.visit()
        homePage.clickMasTardeButton()
    })


    test("Choose new boots", async ({page}) => {
        //choose categorias
        homePage.clickOfertaCategory()
        //choose moda
        
        //choose hombre
        //choose Precio 8000 - 12000
        //choose Marca Topper
        //choose Categorias - Pantalones
        //get list of pantalones

    })
    


}

)