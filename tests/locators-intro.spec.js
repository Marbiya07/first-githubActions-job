import { test } from "@playwright/test";

test("Simple google test @google", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.waitForLoadState("networkidle");

  await page.waitForTimeout(3000);

  let searchBox = page.locator("input[name='q']");

  //await searchBox.type("CYDEO");
  await searchBox.fill("CYDEO");

  await searchBox.press("Enter"); 

});

/*
<textarea jsname="yZiJbe" class="gLFyf" 
 aria-controls="Alh6id" aria-owns="Alh6id" 
 autofocus="" title="Search" value="" 
 aria-label="Search" placeholder="" 
 aria-autocomplete="both" aria-expanded="false" 
 aria-haspopup="false" autocapitalize="off" 
 autocomplete="off" autocorrect="off" id="APjFqb" 
 maxlength="2048" name="q" role="combobox" rows="1" 
 spellcheck="false" 
data-ved="0ahUKEwivrdza9raTAxUg1QIHHbKLJ5EQ39UDCBM"></textarea>

*/
//textarea[@id="APjFqb"] - xpath
//double quotes can cause escape sequences.
