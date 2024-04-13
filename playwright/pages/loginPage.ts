import { expect, type Locator, type Page } from "@playwright/test";


export class LoginPage {

  readonly page: Page;

  readonly userName: Locator;

  readonly password: Locator;

  readonly loginButton: Locator;


  constructor(page: Page) {

    this.page = page;
    this.userName = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" }).first();
    
  }

  async fillUsername(username) {

    await this.userName.click();
    await this.userName.fill(username);

  }

  async fillPassword(password: string) {

    await this.password.click();
    await this.password.fill(password);

  }

  async clickLogin() {

    await this.loginButton.isVisible();
    await this.loginButton.click();

  }


  async doLogin(username: string, password: string) {

    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();

  }

  async checkLoggedIn() {

    await expect(this.page.locator("#header_container")).toBeVisible();

    await expect(this.page.locator(".inventory_list")).toBeVisible();

  }

}

export default LoginPage;
