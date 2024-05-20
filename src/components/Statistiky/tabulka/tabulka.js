import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeTable() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the website
  await page.goto('https://is1.fotbal.cz/souteze/tabulky-souteze.aspx?req=58c71f20-c85c-4bc4-8e88-05bd2bb1423f');
  await page.goto('https://is1.fotbal.cz/souteze/tabulky-souteze.aspx?req=58c71f20-c85c-4bc4-8e88-05bd2bb1423f');

  // Wait for the table to load
  await page.waitForSelector('.vysledky-tabulky');
  
  // Extract the table HTML
  const tableHTML = await page.$eval('.vysledky-tabulky', table => table.outerHTML);
  
  // Write the table HTML to a JSON file
  const jsonData = { tableHTML }; // Wrap HTML in an object
  fs.writeFileSync('tableData.json', JSON.stringify(jsonData));

  await browser.close();
}

scrapeTable();
