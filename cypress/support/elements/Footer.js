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
        return cy.get('.polarity-panel.center-coil > .vertical-container > .slider-container > .slider')
    }
    getCenterCoilNumCoilSlider(){
        return cy.get('.strength-panel.center-coil > .vertical-container >.horizontal-container > .slider-container > div:nth-child(1)>.slider')
    }
    getCenterCoilCurrentSlider(){
        return cy.get('.strength-panel.center-coil > .vertical-container >.horizontal-container > .slider-container > div:nth-child(2)>.slider')
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
    changeCenterBarFieldStrength(num){
        this.getCenterStrengthSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeCenterBarPolarity(){
        this.getCenterBarPolarityToggle().click();
    }
    changeCenterCoilPolarity(num){
        this.getCenterCoilPolaritySlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeCenterCoilNumCoils(num){
        this.getCenterCoilNumCoilSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeCenterCoilCurrent(num){
        this.getCenterCoilCurrentSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeLeftBarPolarity(){
        this.getLeftBarPolarityToggle().click();
    }
    changeRightBarPolarity(){
        this.getRightBarPolarityToggle().click();
    }
    changeRightBarFieldStrength(num){
        this.getRightStrengthSlider().as('range')
            .invoke('val', num)
            .trigger('change')
    }
}

export default Footer;