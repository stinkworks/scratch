describe ('Tests homework (?', () => {

it('Open google', async () => {
    await browser.url('https://google.com/');
    const search = await browser.$("[name='q']");
    await search.setValue('xcom');

    await browser.keys('Return');

//    await browser.pause(1000);; // esto es una negrada

    const link1 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[0];
    const link2 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[1]; 
    const link3 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[2]; 
    const link4 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[3]; 
    const link5 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[4]; 
//    const link6 = await browser.$$("[class='LC20lb MBeuO DKV0Md']")[5]; 


    const urltext1 = await link1.getText();
    const urltext2 = await link2.getText();
    const urltext3 = await link3.getText();
    const urltext4 = await link4.getText();
    const urltext5 = await link5.getText();

    console.log ('URLS----->>>>>>>>>>>>>>>>>>>>>', '|',urltext1,'|',urltext2,'|',urltext3,'|',urltext4,'|',urltext5,'|'); // esto es una RE negrada djasjsdaj
    
    })
});