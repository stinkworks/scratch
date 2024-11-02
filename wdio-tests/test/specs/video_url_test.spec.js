describe ('Tests homework (?', () => {

    it('Open google', async () => {
        await browser.url('https://google.com/');
        const search = await browser.$("[name='q']");
        await search.setValue('xcom');
    
        await browser.keys('Return');
       
        await browser.$$("[class='YmvwI']")[2].click(); // go to videos
        await browser.$("[class='LC20lb MBeuO DKV0Md']").click();

//        await browser.pause(5000)


        const link = await browser.$("link[rel='canonical']") // $x("//link[20][@rel='canonical']")

        const url = await link.getAttribute('href');
    
        console.log ('URL----->>>>>>>>>>>>>>>>>>>>>', url);
        
        })
    });