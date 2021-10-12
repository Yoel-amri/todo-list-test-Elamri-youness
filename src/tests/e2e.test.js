import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000");

  });

  test("Adds one todo", async () => {
    await page.waitForSelector(".new-todo");
    await page.click('.new-todo')
    await page.type('.new-todo', 'todo number onea')
    await page.keyboard.press('Enter');
    await page.waitForSelector(".todo-list");
    const text = await page.$eval(
        ".todo-list",
        (e) => e.textContent
      );
    
    expect(text).toContain("todo number one");
  });

  test("checks if todo is marked as completed", async () => {
      await page.click('li:last-child input');
      await page.waitForSelector('li:last-child', {timeout: 5000})
      const addedTodo = await page.$eval("li:last-child", e => e.className);
      expect(addedTodo).toBe(`completed`);
    })
    
    test('checks if todo is deleted', async () => {
        await page.click('li:last-child .destroy')
        await page.waitForSelector('.todo-list', {timeout: 5000})
        const addedTodo = await page.$eval(".todo-list", e => e.innerHTML);
        expect(addedTodo).toBe("")
  })

  afterAll(() => browser.close());
});