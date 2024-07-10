import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import cron from 'node-cron';

const url: string = 'https://www.bcv.org.ve/'
const httpClient = axios.create()

const getDolarValue = () => {
    httpClient.get(url)
        .then((response) => {
            const html = response.data;
            const htmlParsed = cheerio.load(html);
            // Monedas soportadas por el BCV euro, yuan, lira, rublo, dolar
            const dolarDiv = htmlParsed("#dolar")
            const dolarValue: string = dolarDiv.find('strong').text()
            console.log(dolarValue)
            fs.writeFileSync('./dolarValue.txt', dolarValue)
        })
        .catch((error) => {
            console.log(error)
        })
}

cron.schedule('0 8,13 * * *', getDolarValue)