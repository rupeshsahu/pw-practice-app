import {test,expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://uitestingplayground.com/ajax')
  await page.locator('#ajaxButton').click()
})

test("auto waiting",async ({page})=>{
  const successButton=  page.locator(".bg-success")
 // await successButton.click()
 //  await successButton.waitFor({state:"attached"})
 //  const text=await successButton.allTextContents()
  await expect(successButton).toHaveText("Data loaded with AJAX get request.",{timeout:20000})
})

test(" alternative waiting", async({page})=>{
  const successButton=  page.locator(".bg-success")
  //wait for selector
 // await page.waitForSelector('.bg-success')
  //wait for response
 await page.waitForRequest('http://uitestingplayground.com/ajaxdata')
  //wait for network call completed
  //await page.waitForLoadState('networkidle')
  //hardcoded wait
 // await page.waitForTimeout(5000)
  const text=await successButton.allTextContents()
  await expect(text).toContain("Data loaded with AJAX get request.")

})
