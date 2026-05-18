import {test} from '@playwright/test'
test.beforeEach(async ({page}) => {
  await page.goto("http://localhost:4200/")
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
})

test('test locators',async ({page})=>{
  await page.locator('input').first().click()
  await page.locator('.form-inline').click()
  await page.locator('[placeholder="Password"]').first().fill("Rupesh@00")
  await  page.locator('.sidebar-toggle').click()
  await page.locator('#inputEmail1').first().fill('abcd@gmail.com')



})
test('user facing locators',async ({page})=>{
  await page.getByText('Using the Grid').click()
  await page.getByRole('textbox',{name:'Email'}).first().fill('rupesh@gmai.com')
  await page.getByRole('textbox',{name:'Jane Doe'}).first().fill('abcd@gmail.com')
  //await page.getByRole('checkbox',{name:'Remember me'}).first().check()
  //await page.locator('custom-checkbox').first().click()
  await page.getByRole('button',{name:'SUBMIT'}).first().click()
  await page.getByLabel('Email').first().fill('teting get by label')
  await page.locator('nb-card nb-checkbox :text-is("Remember me")').first().check()



})

test('child locators',async ({page})=>{

    await page.locator('nb-card nb-card-header').getByText('Using the Grid').click();

  await page.locator('nb-card').filter({ hasText: 'Horizontal form' }).getByRole('button', { name: 'SIGN IN' }).click();
  await page.locator('nb-card').filter({hasText:"Block form"}).getByRole('textbox',{name:"First Name"}).fill("Rupesh")
  await page.locator('nb-card').filter({hasText:"Block form"}).getByRole('textbox',{name:"Last Name"}).fill("Sahu")
  await page.locator('nb-card').filter({hasText:"Block form"}).getByRole('textbox',{name:"Email"}).fill("Rupesh@gmail.com")
  await page.locator('nb-card').filter({hasText:"Block form"}).getByRole('textbox',{name:"Website"}).fill("www.rupeshsahu.com")
  await page.locator('nb-card').filter({hasText:"Block form"}).getByRole('button',{name:"SUBMIT"}).click()

  await page.locator('nb-card').nth(3).getByRole('button').click()



  });




test('parent locators',async ({page})=>{
  await page.locator('nb-card',{hasText:"Form without labels"}).getByRole('textbox',{name:"Recipients"}).fill("rupesh")
  await page.locator('nb-card',{hasText:"Form without labels"}).getByRole('textbox',{name:"Subject"}).fill("rupesh")
  await page.locator('nb-card',{hasText:"Form without labels"}).getByRole('textbox',{name:"Message"}).fill("rupesh")
  await page.locator('nb-card',{hasText:"Form without labels"}).getByRole('button',{name:"SEND"}).click()


})
