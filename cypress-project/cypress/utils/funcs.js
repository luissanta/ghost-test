let stepCount = 0;

export default function takeScreenShot(){
    cy.wait(1000);
    cy.screenshot("before-step-"+stepCount,{overWrite:true});
    stepCount += 1;
}