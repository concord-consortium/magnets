class Header{
    getUnselectMagnetLeft(){
        return cy.get('.magnet-button.left>.unselected');
    }
    selectMagnetLeft(){
        this.getUnselectMagnetLeft().click();
    }
    getUnselectMagnetRight(){
        return cy.get('.magnet-button.right>.unselected');
    }
    selectMagnetRight(){
        this.getUnselectMagnetRight().click();
    }
    getTopBar(){
        return cy.get('.top-bar>.curtain.unrolled');
    }
    getSelectedMagRight(){
        return cy.get('.magnet-button.right');
    }
    selectBarMagRight(){
        cy.get('.content-container.right >.button.short>img').contains('magnet-bar.png').click();
    }
    selectCoilMagRight(){
        cy.get('.content-container.right >.button >img').contains('magnet-coil.png').click();
    }
    removeMagRight(){
        cy.get('.content-container.right >.button').contains('remove magnet').click();
    }
    getSelectedMagLeft(){
        return cy.get('.magnet-button.left')
    }
    selectBarMagLeft(){
        cy.get('.content-container.left >.button.short>img').contains('magnet-bar.png').click();
    }
    selectCoilMagLeft(){
        cy.get('.content-container.left >.button >img').contains('magnet-coil.png').click();
    }
}
export default Header;
