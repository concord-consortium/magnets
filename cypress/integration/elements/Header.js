class Header{
    getUnselectMagnetLeft(){
        return cy.get('.button.selectable > .title.left').contains('Select a magnet');
    }
    selectMagnetLeft(){
        this.getUnselectMagnetLeft().click();
    }
    getUnselectMagnetRight(){
        return cy.get('.button.selectable > .title.right').contains('Select a magnet');
    }
    selectMagnetRight(){
        this.getUnselectMagnetRight().click();
    }
    getTopBar(){
        return cy.get('.top-bar>.curtain.unrolled');
    }
    getBarMagLeft(){
        return cy.get('.top-magnet-back.left.bar')
    }
    getBarMagLeftLabel(){
        return cy.get('.label.bar.left')
    }
    getCoilMagLeft(){
        return cy.get('.top-magnet-back.left.coil')
    }
    getCoilMagLeftLabel(){
        return cy.get('.label.coil.left')
    }
    getBarMagRight(){
        return cy.get('.top-magnet-back.right.bar')
    }
    getBarMagRightLabel(){
        return cy.get('.label.bar.right')
    }
    getCoilMagRight(){
        return cy.get('.top-magnet-back.right.coil')
    }
    getCoilMagRightLabel(){
        return cy.get('.label.coil.right')
    }
    getRemoveMagnet(){
        return cy.get('.top-bar > .curtain.unrolled > div > .label.remove')
    }
    selectBarMagRight(){
        this.getBarMagRight().click();
    }
    selectCoilMagRight(){
        this.getCoilMagRight().click();
    }
    removeMagRight(){
        this.getRemoveMagnet().click();
    }
    getSelectedMagLeft(){
        return cy.get('.nav-select-outline.left')
    }
    getSelectedMagRight(){
        return cy.get('.nav-select-outline.right')
    }
    selectBarMagLeft(){
        this.getBarMagLeft().click({force:true});
    }
    selectCoilMagLeft(){
        this.getCoilMagLeft().click({force:true});
    }
    selectBarMagRight(){
        this.getBarMagRight().click({force:true});
    }
    selectCoilMagRight(){
        this.getCoilMagRight().click({force:true});
    }
}
export default Header;
