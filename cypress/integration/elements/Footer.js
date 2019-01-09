class Footer {
    getFooter(){
        return cy.get('.bottom-bar > div > .polarity-panel')//finding an element in the bottom bar since bottom bar is always visible.
    }
    getCenterBarPolarityToggle(){
        return cy.get('.polarity-panel.center-bar > .vertical-container > div.switch-button > .container > div.switch')
    }
    getCenterBarPolarityToggleLabel(){
        return cy.get('.polarity-panel.center-bar > .vertical-container > div.switch-button > .container > div.label')
    }
    getLeftBarPolarityToggle() {
        return cy.get('.polarity-panel.left-bar > .vertical-container > div.switch-button > .container > div.switch');
    }
    getLeftBarPolarityToggleLabel(){
            return cy.get('.polarity-panel.left-bar > .vertical-container > div.switch-button > .container > div.label')
    }
    getLeftStrengthSlider(){
        return cy.get('.bottom-bar > div > .strength-control-panel > div > .slider')
    }
    getRightPolarityButton(){
        return cy.get('.bottom-bar.unrolled > .row > .row> .polarity-button')
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
        cy.get('input[type=range]').as('range')
            .invoke('val', num)
            .trigger('change')
    }
    changeLeftPolarity(){
        this.getLeftPolarityButton().click();
    }
    changeRightPolarity(){
        this.getRightPolarityButton().click();
    }
}

export default Footer;