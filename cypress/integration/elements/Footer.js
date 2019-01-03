class Footer {
    getFooter(){
        return cy.get('.bottom-bar')
    }
    getLeftPolarityButton(){
        return cy.get('.bottom-bar.unrolled > .row > .polarity-button')
    }
    getLeftStrengthSlider(){
        return cy.get('.bottom-bar.unrolled > .row > .strength-control-panel > div > .slider')
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