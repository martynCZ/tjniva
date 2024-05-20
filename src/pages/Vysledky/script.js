import express, { text } from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';
const app = express();

app.use(cors())
// Define an endpoint to scrape data
app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://is1.fotbal.cz/souteze/detail-souteze.aspx?req=58c71f20-c85c-4bc4-8e88-05bd2bb1423f&sport=fotbal');

    await page.waitForSelector('td');

    const zapasy = await page.evaluate(() => {
      const elements = document.querySelectorAll('td');
      const texts = [];
  
      let test = 0;
      let nasobic = 1;
      let t = 7;
      
      for (let i = 0; i < elements.length; i += t) {
        test++;
          if (test === 5 + nasobic ) {
              t = 9;
              nasobic += 6;
          } else {
              t = 7;
          }
  
          texts.push({
              "skore": elements[5 + i].textContent.trim(),
              "domaci": elements[3 + i].textContent.trim(),
              "hoste": elements[4 + i].textContent.trim(),
          });
      }
  
      return texts;
  });
  
  
  

    await browser.close();
    
    res.json({ zapasy });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'An error occurred during scraping' });
  }
});

const PORT = process.env.PORT || 5000;
const IP_ADDRESS = '192.168.0.139'
app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server is running on port ${PORT}`);
});
