import { Page, test as setup } from "@playwright/test";
import { config } from "dotenv";
import LoginPage from "../pages/LoginPage";


config();


const standard_user = ".auth/standard_user.json";

setup("authenticate as user standard", async ({ page }) => {

  const user = process.env.USER_STANDARD!;
  const password = process.env.PASSWORD!;

  await doLogin(page, user, password);
  await page.context().storageState({ path: standard_user });

});


const visual_user = ".auth/visual_user.json";

setup("authenticate as user is visual user", async ({ page }) => {

  const user = process.env.USER_VISUAL;
  if (!user) throw new Error("Missing user");

  const password = process.env.PASSWORD;
  if (!password) throw new Error("Missing password");

  await doLogin(page, user, password);
  await page.context().storageState({ path: visual_user });

});


async function doLogin(page: Page, user: string, password: string) {
  
  const loginPage = new LoginPage(page);

  await page.goto("/", { waitUntil: "load" });

  await loginPage.doLogin(user, password);
  await loginPage.checkLoggedIn();

}
