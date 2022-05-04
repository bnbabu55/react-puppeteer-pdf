const puppeteer = require("puppeteer");

const pdfGenerator = async (renderedHTML, fileName) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  // await page.goto(link);
  await page.setContent(renderedHTML);
  await page.emulateMediaType("screen");
  await page.pdf({
    format: "a4",
    printBackground: true,
    margin: {
      top: "13mm",
      bottom: "13mm",
      left: "10mm",
      right: "10mm",
    },
    displayHeaderFooter: true,
    headerTemplate: "",
    footerTemplate:
      '<span style="font-size: 8pt;margin-left: 15mm;"> <span class="pageNumber"></span> of <span class="totalPages"></span></span>',
    path: `./forms/${fileName}.pdf`,
  });
  await browser.close();
  return `./forms/${fileName}.pdf`;
};

module.exports = pdfGenerator;
