class Header{
    getSelectAMagnetLeft(){
        return cy.get('.button.selectable >.title.left');
    }
    selectMagnetLeft(){
        this.getSelectAMagnetLeft().click();
    }
    getSelectAMagnetRight(){
        return cy.get('.button.selectable >.title.right');
    }
    selectMagnetRight(){
        this.getSelectAMagnetRight().click();
    }
    getTopBar(){
        return cy.get('.top-bar>.curtain.unrolled');
    }
    getSelectedMagRight(){
        return cy.get('.nav-select-outline.right');
    }
    getBarMagRight(){
        return cy.get('.top-magnet.bar.right')
    }
    selectBarMagRight(){
        this.getBarMagRight().click();
    }
    getCoilMagRight(){
        return cy.get('.top-magnet.coil.right')
    }
    selectCoilMagRight(){
        this.getCoilMagRight().click();
    }
    getRemoveMagnet(){
        return cy.get('.label.remove');
    }
    removeMagRight(){
        this.getRemoveMagnet().contains('Remove magnet').click();
    }
    getSelectedMagLeft(){
        return cy.get('.nav-select-outline.left')
    }
    getBarMagLeft(){
        return cy.get('.top-magnet.bar.left')
    }
    selectBarMagLeft(){
        this.getBarMagLeft().click();
    }
    getCoilMagLeft(){
        return cy.get('.top-magnet.coil.left')
    }
    selectCoilMagLeft(){
        this.getCoilMagLeft().click();
    }
}
export default Header;
