let stepCount = 1;

export function takeScreenShot(){
    cy.wait(1000);
    cy.screenshot("after-step-"+stepCount,{overWrite:true});
    stepCount += 1;
}
