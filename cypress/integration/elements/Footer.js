class Footer {
    getFooter(){ //this is always visible so use the buttons to check whether footer is visible
        return cy.get('.bottom-bar')
    }
    getCenterBarPolarityToggle(){
        return cy.get('.polarity-panel.center-bar > .vertical-container > .switch-button > .container > .label') //chose the label selector so text can also be checked
    }
    getCenterStrengthSlider(){
        return cy.get('.strength-panel.center-bar > .vertical-container > .horizontal-container > .slider-container > .slider')
    }
    getCenterCoilPolaritySlider(){

    }
    getMagneticFieldFieldLinesToggle(){ //Use the label selector so text can also be checked
        return cy.get ('.mag-field-panel.center > .vertical-container > .horizontal-container > .button > .switch-button > .container > .label')
    }
    getMagneticFieldFieldLinesToggle(){ //Use the label selector so text can also be checked
        return cy.get ('.mag-field-panel.center > .vertical-container > .horizontal-container > .button > .switch-button > .container > .label')
    }
     
    getLeftBarPolarityToggle() {
        return cy.get('.polarity-panel.left-bar > .vertical-container > div.switch-button > .container > .label'); //chose the label selector so text can also be checked
    }
    getLeftStrengthSlider(){
        return cy.get('.bottom-bar > div > .strength-control-panel > div > .slider')
    }
    getRightBarPolarityToggle() {
        return cy.get('.polarity-panel.right-bar > .vertical-container > div.switch-button > .container > .label'); //choose the label selector so text can also be checked
    }
    getRightStrengthSlider(){
        return cy.get('.bottom-bar.unrolled > .row > .row > .strength-control-panel > div > .slider')
    }
    getCompass(){
        return cy.get('[data-test=compass]');
    }
    turnOnFieldLines(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Field Lines').click();
    }
    turnOffFieldLines(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Field Lines').click();
    }
    turnOnCloud(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Cloud').click();
    }
    turnOffCloud(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Cloud').click();
    }
    turnOnPointers(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Pointers').click();
    }
    turnOffPointers(){
        cy.get('.mag-field-control-panel>.checkbox-container>.container').contains('Pointers').click();
    }
    changeFieldStrength(num){
        this.getCenterStrengthSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeCenterPolarity(){
        this.getCenterBarPolarityToggle().click();
    }
    changeLeftPolarity(){
        this.getLeftBarPolarityToggle().click();
    }
    changeRightPolarity(){
        this.getRightBarPolarityToggle().click();
    }
}

export default Footer;