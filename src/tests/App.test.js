import { MAX_POKEMONS } from 'constants/index';

const puppeteer = require('puppeteer');
const { installMouseHelper } = require('./install-mouse-helper');

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

let browser, page;
const appUrlBase = 'http://localhost:4000/';

beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      slowMo: 40,
      defaultViewport: null,
      args: ['--start-maximized']
    }
  );
  page = await browser.newPage();
  await installMouseHelper(page);
})

describe('Pokemons', () => {
  test('selects Pokemons number #2 and #10, and displays the pokemon details', async () => {
    await page.goto(appUrlBase)
    await delay(3000)
    await page.waitForSelector('#id-2')
    await page.click('#id-2')
    await delay(2000)
    await page.waitForSelector('#id-10')
    await page.click('#id-10')
  }, 16000)

  test('selects pokemon from Evolutions (last evolution)', async () => {
    await delay(3000)
    await page.waitForSelector('#id-evo-12')
    await page.click('#id-evo-12')
  }, 8000)

  test('tests pre-caching - hovers on #006 and afer 2 second clicks', async () => {
    await delay(3000)
    await page.waitForSelector('#id-6')
    await page.hover('#id-6')
    await delay(2000)
    await page.waitForSelector('#id-6')
    await page.click('#id-6')
  }, 10000)

  test('test pagination - opens page 2 and selects the second item', async () => {
    await delay(2000)
    await page.waitForSelector('#pagination li:nth-child(3) button')
    await page.click('#pagination li:nth-child(3) button')
    await delay(2000)
    await page.waitForSelector('#id-15')
    await page.click('#id-15')
  }, 16000)

  test('tests cached data - opens the previous and next pages', async () => {
    await delay(3000)
    await page.waitForSelector('#pagination li:first-child button')
    await page.click('#pagination li:first-child button')
    await delay(3000)
    await page.waitForSelector('#pagination li:last-child button')
    await page.click('#pagination li:last-child button')
  }, 16000)

  test('opens the last page and selects the last item', async () => {
    await delay(3000)
    await page.waitForSelector('#pagination li:nth-last-child(2) button')
    await page.click('#pagination li:nth-last-child(2) button')
    await delay(2000)
    await page.waitForSelector(`#id-${MAX_POKEMONS}`)
    await page.click(`#id-${MAX_POKEMONS}`)
  }, 16000)

  test('test 404 not found page', async () => {
    await delay(3000)
    await page.goto(appUrlBase + 'about')
  }, 10000)

  test('clicks on the logo should go to home page', async () => {
    await delay(2000)
    await page.goto(appUrlBase)
    await delay(3000)
  }, 10000)
})

afterAll(() => {
  browser.close()
});