import { expect, type Locator, type Page } from "@playwright/test";


export class InventoryPage {

  readonly page: Page;

  readonly title: Locator;

  readonly inventoryList: Locator;

  constructor(page: Page) {

    this.page = page;
    this.title = page.getByTitle("Products");
    this.inventoryList = page.locator(".inventory-list");

  }  

  
  async addLabsBackPack() {

    const addToCartBtn: Locator = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');   
    await expect(addToCartBtn).toContainText('Add to cart');
    await addToCartBtn.click();

  }

  async assertLabsBackPackRemove(){
    
    const addToCartBtn: Locator = this.page.locator('[data-test="remove-sauce-labs-backpack"]');   
    await expect(addToCartBtn).toContainText('Remove'); 

  }

  async assertShoppingCart(itemNumber: number){
    
    const shoppingCartBadge: Locator = this.page.locator('[data-test="shopping-cart-badge"]');    
    await expect(shoppingCartBadge).toContainText(itemNumber.toString()); 

  }

  async checkInventoryPageDisplay(){

    await expect(this.page.locator("#header_container")).toBeVisible();   

  }

}

export default InventoryPage;