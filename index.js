const {Builder, By} = require('selenium-webdriver');

async function main() {
  let driver = await new Builder().forBrowser('firefox').setFirefoxOptions({binary: "C:\\Program Files\\Mozilla Firefox\\firefox.exe"}).build();
  try {
    await driver.get('https://www.vb-net.com/');
    const id = 'order';
    try {
      const htmlElement = await driver.findElement(By.id(id));
      const text = await htmlElement.getText();
      console.log(text);
      await htmlElement.click();
     } catch (err) {
        if (err.name === 'NoSuchElementError') {
           console.log(`Element with ID '${id}' not found.`);
        } else {
            throw err; // Re-throw if it's not a NoSuchElementError
        }
     }

  } finally {
     await driver.quit(); // Make sure to close the browser
  }
}


main();