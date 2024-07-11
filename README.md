# BCV Web Scrapper
This is a web scrapper that scrapes the BCV (Banco Central de Venezuela) website for the exchange rate of the USD to VES, and EUR to VES. The exchange rate is updated every day at 08:00AM and 01:00PM (UTC -04:00), the script installs himself as a service running in the background.

Creating a file with the current exchange rate and a log file with the exchange rates obtained by the script  in the folder specified in the config.json file.

## Installation
To install the web scrapper you need to have [Node.js](https://nodejs.org) installed in your system.

1. Clone the repository using the following command:
```bash
git clone https://github.com/MarcoVilera/web-scrapper-bcv.git
```

2. Enter the repository folder:
```bash
cd web-scrapper-bcv
```

3. Install the dependencies:
```bash
npm install
```

4. Compile the TypeScript code:
```bash
npm run build
```

5. After you compile the code enter the `dist` folder:
```bash
cd dist
```
6. Edit the config.json with the folder where you want to save the exchange rate data, the default folder is `../bcv_data` and the file name, the default file name is `exchange.txt`.
   
7. Run the installation script:
```bash
node bcv_service.js
```

Now the service is running in the background and will update the exchange rate every day at 08:00AM and 01:00PM (UTC -04:00).

you can check if the service is running on your task manager, the service name is `BCV Service`.