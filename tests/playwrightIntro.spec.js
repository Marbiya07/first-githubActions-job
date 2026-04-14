//new way of importing instead of using require, we can use immport statement.
import{test} from "@playwright/test";

//const{test} = require("@playwright/test") 
//importing test function, common function to import specific member of the library.


// test has 2 arguments, first is the name of the test (String) and second is the async callback function that contains the test code.
test("Simple google test", async ({page}) => {
    //page fixture is equivalent to driver in selenium.

   await page.goto("https://www.google.com");
   //await- to give enough timeout for promise methods.
   //must be used in an asynchronous function, otherwise it will throw an error.

   await page.waitForTimeout(3000);
   //after waiting for 3 secs the test ends, browser closes.



});

