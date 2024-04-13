import { test } from "@playwright/test";

import InventoryPage from "../pages/inventoryPage";


let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
    
    await page.goto("/inventory.html");
    inventoryPage = new InventoryPage(page);
    await inventoryPage.checkInventoryPageDisplay();

  });

test.afterEach(async ({ page}) => {

  await page.close();

});

test.describe("Verify purchasing a product", () => {

  test.use({ storageState: ".auth/standard_user.json" });

  test("Add to cart a product", async () => {

    await inventoryPage.addLabsBackPack();
    await inventoryPage.assertLabsBackPackRemove();
    await inventoryPage.assertShoppingCart(1);
        
  });

});


// npx playwright test playwright/specs/purchaseProducts.spec.ts --project=chromium --headed