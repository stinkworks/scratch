const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
 
;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('https://www.google.com/ncr')
    await driver.findElement(By.name('q')).sendKeys('naranjas', Key.RETURN)
    await driver.wait(until.titleIs('naranjas - Google Search'), 1000)
  }   
  finally {
    await driver.quit()
  }
})()