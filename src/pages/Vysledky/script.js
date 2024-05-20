import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();

app.use(cors());

// Define an endpoint to scrape data
app.get('/scrape', async (req, res) => {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://is1.fotbal.cz/souteze/detail-souteze.aspx?req=58c71f20-c85c-4bc4-8e88-05bd2bb1423f&sport=fotbal', {
      waitUntil: 'networkidle2',
    });

    await page.waitForSelector('td');

    const zapasy = await page.evaluate(() => {
      const elements = document.querySelectorAll('td');
      const texts = [];

      let rowCounter = 0;
      let incrementStep = 7;
      let adjustCounter = 1;

      for (let i = 0; i < elements.length; i += incrementStep) {
        rowCounter++;
        if (rowCounter === 5 + adjustCounter) {
          incrementStep = 9;
          adjustCounter += 6;
        } else {
          incrementStep = 7;
        }

        texts.push({
          skore: elements[5 + i]?.textContent?.trim() || '',
          domaci: elements[3 + i]?.textContent?.trim() || '',
          hoste: elements[4 + i]?.textContent?.trim() || '',
        });
      }

      return texts;
    });

    res.json({ zapasy });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'An error occurred during scraping' });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

// For Firebase/GitHub Hosting, do not specify IP_ADDRESS or PORT
const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
