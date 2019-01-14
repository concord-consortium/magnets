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
        return cy.get ('.mag-field-panel.center > .vertical-container > .horizontal-container > [data-test="field-lines-toggle"] > .switch-button > .container > .label')
    }
    getMagneticFieldFieldLinesToggle(){ //Use the label selector so text can also be checked
        return cy.get ('.mag-field-panel > .vertical-container > .horizontal-container > [data-test="field-lines-toggle"] > .switch-button > .container > .label')
    }
    getMagneticFieldCloudToggle(){ //Use the label selector so text can also be checked
        return cy.get ('.mag-field-panel > .vertical-container > .horizontal-container > [data-test="cloud-toggle"] > .switch-button > .container > .label')
    }
    getMagneticFieldPointersToggle(){ //Use the label selector so text can also be checked
        return cy.get ('.mag-field-panel > .vertical-container > .horizontal-container > [data-test="pointers-toggle"] > .switch-button > .container > .label')
    }
    getLeftBarPolarityToggle() {
        return cy.get('.polarity-panel.left-bar > .vertical-container > div.switch-button > .container > .label'); //chose the label selector so text can also be checked
    }
    getLeftStrengthSlider(){
        return cy.get('.strength-panel.left-bar > .vertical-container > .horizontal-container > .slider-container > .slider')
    }
    getRightBarPolarityToggle() {
        return cy.get('.polarity-panel.right-bar > .vertical-container > div.switch-button > .container > .label'); //choose the label selector so text can also be checked
    }
    getRightStrengthSlider(){
        return cy.get('.strength-panel.right-bar > .vertical-container > .horizontal-container > .slider-container > .slider')
    }
    getCompass(){
        return cy.get('[data-test=compass]');
    }
    getMagneticForceToggle(){
        return cy.get('.mag-forces-panel > .vertical-container > .horizontal-container > .switch-button > .container > .label')
    }
    turnOnFieldLines(){
        this.getMagneticFieldFieldLinesToggle().click();
    }
    turnOffFieldLines(){
        this.getMagneticFieldFieldLinesToggle().click();
    }
    turnOnCloud(){
        this.getMagneticFieldCloudToggle().click();
    }
    turnOffCloud(){
        this.getMagneticFieldCloudToggle().click();
    }
    turnOnPointers(){
        this.getMagneticFieldPointersToggle().click();
    }
    turnOffPointers(){
        this.getMagneticFieldPointersToggle().click();
    }
    changeCenterFieldStrength(num){
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
    changeRightFieldStrength(num){
        this.getRightStrengthSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
}

export default Footer;