import { test } from "@playwright/test";

test.describe("Practice.cydeo", () => {
  test.beforeEach(async ({page}) => {
    
    await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("Getting the title", async ({ page }) => {
    console.log(await page.title());
  });

  test("Getting the current URL", async ({ page }) => {
    let actualURL = page.url();
    console.log(actualURL);
  });
});
