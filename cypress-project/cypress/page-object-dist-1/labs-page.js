let config = require('../../config.json')

export class LabsPage{

    constructor(){
        this.labsUrl = config.siteHost+config.labs.labsUrl;
        this.clearButton = config.labs.cleanButton;
        this.deleteConfirm = config.labs.deleteConfirm;
    }

    clearAdmin(){
        cy.visit(this.labsUrl).then(()=>{
            cy.wait(2000);
            cy.get(this.clearButton).click({force:true}).then(()=>{
                cy.wait(2000);
                cy.get(this.deleteConfirm).first().click({force:true});
            });
        });
    }

}