const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const fsp = require('fs/promises');

const { options } = config;
const percentageToPassTest = 4
let steps = []

const dir = './results';

fsp.readdir(dir).then(files => {
    compareScenarios(files)
})

function compareScenarios(scenarios) {
    for ( let scenario of scenarios ) {
        fsp.readdir(dir + '/' + scenario).then(files => {
            async function executeTest () {
                let resultInfo = {}

                for (let step = 1; step <=files.length/2; step++) {
                    steps.push(step)
                    const data = await compareImages(
                        fs.readFileSync(`./results/${scenario}/before-step-${step}.png`),
                        fs.readFileSync(`./results/${scenario}/after-step-${step}.png`),
                        options
                    );

                    resultInfo[step] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime,
                        passText: data.misMatchPercentage < percentageToPassTest ? 'Passed the test' :  'Didn\'t pass the test',
                        passClass: data.misMatchPercentage < percentageToPassTest ? 'badge-pass' :  'badge-not-pass'
                    }
                    fs.writeFileSync(`./results/${scenario}/compare-step-${step}.png`, data.getBuffer());
                }
                fs.writeFileSync(`./results/${scenario}/report.html`, createReport(scenario, resultInfo));
                fs.copyFileSync('./index.css', `./results/${scenario}/index.css`);

                steps = []
                return resultInfo;
            }
            (async () => console.log(await executeTest()))();
        })
    }
}

function browser(step, resInfo){
    return `
    <div class="browser" id="test">
        <div class="title">
            <h2 class="step step-title">Step: ${step}</h2><div class="${resInfo.passClass}">${resInfo.passText}</div>
            <p>Mis Match Percentage: <b>${resInfo.misMatchPercentage}%</b> - Raw Mis Match Percentage: <b>${resInfo.rawMisMatchPercentage}%</b></p>
            <p class="info">Is Same Dimensions: <b>${resInfo.isSameDimensions}</b> - Dimension Difference: <b>${JSON.stringify(resInfo.dimensionDifference)}</b></p>
            <p class="info">Diff Bounds: <b>${JSON.stringify(resInfo.diffBounds)}</b> - Analysis Time: <b>${resInfo.analysisTime}ms</b></p>
        </div>
        <div class="img-line">
            <div class="img-container img-container-div">
                <span class="img-name">Reference</span>
                <img class="img-step" src="before-step-${step}.png" id="refImage" alt="before-step-${step}">
            </div>
            <div class="img-container img-container-div">
                <span class="img-name">Test</span>
                <img class="img-step" src="after-step-${step}.png" id="testImage" alt="after-step-${step}">
            </div>
            <div class="img-container">
                <span class="img-name">Diff</span>
                <img class="img-step" src="./compare-step-${step}.png" id="diffImage" alt="compare-step-${step}">
            </div>
        </div>
    </div>`
}

function createReport(scenario, resInfo){
    return `
    <html lang="es">
        <head>
            <title>VRT Report</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="http://20.102.114.58/" target="_blank">Ghost v3.41.1</a>
                 versus
                 <a href="http://20.102.114.58:3002/" target="_blank">Ghost v4.44.0</a>
            </h1>
            <h2>Executed: ${scenario}</h2>
            <h3>Percentage to pass test: less than ${percentageToPassTest}%</h3>
            <div id="visualizer">
                ${steps.map(step=>browser(step, resInfo[step]))}
            </div>
        </body>
    </html>`
}
