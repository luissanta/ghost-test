const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const fsp = require('fs/promises');

const { options } = config;
const steps = ['step-1', 'step-2', 'step-3']

const dir = './results';

fsp.readdir(dir).then(files => {
    vrt(files)
})

function vrt(testScenarios) {
    for ( let testScenario of testScenarios ) {
        async function executeTest () {
            let resultInfo = {}

            for ( let step of steps ) {
                const data = await compareImages(
                    fs.readFileSync(`./results/${testScenario}/before-${step}.png`),
                    fs.readFileSync(`./results/${testScenario}/after-${step}.png`),
                    options
                );

                resultInfo[step] = {
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime
                }
                fs.writeFileSync(`./results/${testScenario}/compare-${step}.png`, data.getBuffer());
            }

            fs.writeFileSync(`./results/${testScenario}/report.html`, createReport(testScenario, resultInfo));
            fs.copyFileSync('./index.css', `./results/${testScenario}/index.css`);

            return resultInfo;
        }
        (async () => console.log(await executeTest()))();
    }
}

function browser(step, resInfo){
    return `
    <div class="browser" id="test0">
        <div class="title">
            <h2 class="step">Step: ${step}</h2>
            <p>Raw Mis Match Percentage: <b>${resInfo.rawMisMatchPercentage}%</b> - Mis Match Percentage: <b>${resInfo.misMatchPercentage}%</b></p>
            <p class="info">Is Same Dimensions: <b>${resInfo.isSameDimensions}</b> - Dimension Difference: <b>${JSON.stringify(resInfo.dimensionDifference)}</b></p>
            <p class="info">Diff Bounds: <b>${JSON.stringify(resInfo.diffBounds)}</b> - Analysis Time: <b>${resInfo.analysisTime}ms</b></p>
        </div>
        <div class="img-line">
            <div class="img-container img-container-div">
                <span class="img-name">Reference</span>
                <img class="img-step" src="before-${step}.png" id="refImage" alt="before-${step}">
            </div>
            <div class="img-container img-container-div">
                <span class="img-name">Test</span>
                <img class="img-step" src="after-${step}.png" id="testImage" alt="after-${step}">
            </div>
            <div class="img-container">
                <span class="img-name">Diff</span>
                <img class="img-step" src="./compare-${step}.png" id="diffImage" alt="compare-${step}">
            </div>
        </div>
    </div>`
}

function createReport(testScenario, resInfo){
    return `
    <html lang="es">
        <head>
            <title>VRT Report</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="http://20.102.114.58/" target="_blank">Ghost v3.4.4</a>
                 versus
                 <a href="http://20.102.114.58:3002/" target="_blank">Ghost v4.0.0</a>
            </h1>
            <h3>Executed: ${testScenario}</h3>
            <div id="visualizer">
                ${steps.map(step=>browser(step, resInfo[step]))}
            </div>
        </body>
    </html>`
}
