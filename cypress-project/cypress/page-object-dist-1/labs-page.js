let config = require('../../config.json')

export class LabsPage{

    constructor(){
        this.labsUrl = config.siteHost+config.labs.labsUrl;
        this.clearButton = config.labs.cleanButton;
        this.deleteConfirm = config.labs.deleteConfirm;
        this.screenshotsPath = config.labs.screenshotsPath;
    }

    clearAdmin(){
        cy.visit(this.labsUrl).then(()=>{
            cy.get(this.clearButton).click({force:true}).then(()=>{
                cy.get(this.deleteConfirm).first().click({force:true});
            });
        });
    }

}