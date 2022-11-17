let cucumber_1 = require("@cucumber/cucumber");
let FileHelper_1 = require("kraken-node/lib/utils/FileHelper");
let counter = 0;

const { REPORT_PATH } = require("kraken-node/lib/utils/Constants");
let newPath = REPORT_PATH.replace("reports","results/");

cucumber_1.AfterStep(async function (world) {
    let temporalName = world.gherkinDocument.feature.name.replace(/\s/g,'');
    FileHelper_1.FileHelper.instance().createFolderIfDoesNotExist(newPath + "/" + temporalName+ "/");
    await new Promise(r => setTimeout(r, 3000));
    counter++;
    this.driver.saveScreenshot("results/" + temporalName+ "/after-step-" + counter + ".png");
});
