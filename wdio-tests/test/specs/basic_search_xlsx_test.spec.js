import * as fs from 'node:fs';
import XLSX from 'xlsx';

describe ('Tests homework (?', () => {

    beforeAll(() => {
    const filePath = "L:/Repos/scratch/wdio-tests/test/urls.xlsx";
fs.truncate(filePath, (err) => {  // esto deletea el file :)
    if (err) throw err;
    console.log('test.xlsx was cleared');
    });
});

it('Open google', async () => {
    await browser.url('https://google.com/');
    const search = await browser.$("[name='q']");
    await search.setValue('xcom');
    await browser.keys('Return');

    await browser.pause(1000); 
    
    const links = await browser.$$("[jsname='UWckNb']");
    const titles = await browser.$$("h3.LC20lb.MBeuO.DKV0Md");

    const results = [];

    for (const [index] of links.entries()) {

        const link = links[index];
        const title = titles[index];

        const testTitle = await title.getText('innerText');
        const testLink = await link.getAttribute('href');

    //    console.log(`Link ${index + 1}: ${testLink}`);

        results.push({
            Index: index + 1,
            Title: testTitle || "No Title", // el || es un or, big important
            Link: testLink || "No URL",
        });

    };

console.log (results);

if (results.length > 0) {
    const workSheet = XLSX.utils.json_to_sheet(results);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "URLs");
    XLSX.writeFile(workBook, "L:/Repos/scratch/wdio-tests/test/urls.xlsx");
    console.log('si esto aparece es pq el file quedó escrito :3');
        }}

    )}

);