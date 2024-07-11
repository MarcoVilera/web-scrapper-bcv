import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import cron from 'node-cron';


const getDolarValue = () => {
    const url: string = 'https://www.bcv.org.ve/'
    const httpClient = axios.create()

    interface configData {
        output_dir: string
        file_name: string
    }
    const configFile = fs.readFileSync('./config.json', 'utf8')
    const parsedConfig: configData = JSON.parse(configFile)

    httpClient.get(url)
        .then((response) => {
            const html = response.data;
            const htmlParsed = cheerio.load(html);
            // Monedas soportadas por el BCV euro, yuan, lira, rublo, dolar
            const dolarDiv = htmlParsed("#dolar")
            const dolarValue: string = parseFloat(dolarDiv.find('strong').text().replace(',', '.')).toFixed(2)
            console.log(dolarValue)

            const euroDiv = htmlParsed("#euro")
            const euroValue: string = parseFloat(euroDiv.find('strong').text().replace(',', '.')).toFixed(2)
            console.log(euroValue)
            fs.writeFileSync(`${parsedConfig.output_dir}/${parsedConfig.file_name}`, `${dolarValue}|USD\n${euroValue}|EUR`)
            // Log Implementation
            fs.appendFileSync(`${parsedConfig.output_dir}/log.txt`, `${new Date().toLocaleString()} - USD:${dolarValue} EUR:${euroValue}\n`)
        })
        .catch((error) => {
            console.log(error)
        })
}
cron.schedule('0 8,13 * * *', getDolarValue)