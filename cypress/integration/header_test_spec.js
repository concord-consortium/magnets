import Header from '../support/elements/Header'
import Footer from '../support/elements/Footer'
import MainSpace from '../support/elements/MainSpace'

const header = new Header;
const footer = new Footer;
const mainSpace = new MainSpace;
context('Test header area', ()=>{
    before(() => {
        cy.visit("localhost:8080");
    });
    describe('Header', ()=>{
        it('will verify workspace is empty when no magnets are selected', ()=>{
            header.selectMagnetLeft();
            footer.getCenterBarPolarityToggle().should('not.be.visible');

        });
        it('will verify top bar is not visible when select magnet button is clicked and top bar is already showing', ()=>{
            header.selectMagnetLeft();
            header.getTopBar().should('not.be.visible');
        });
        it('will verify top bar is shown when left select magnet button is clicked', ()=>{
            header.selectMagnetLeft();
            header.getTopBar().should('be.visible');
        });
        it('will verify movable magnet cannot be added when fixed magnet is not present', ()=>{
            header.getBarMagRight().parent().should('have.class', 'disabled');
            header.getCoilMagRight().parent().should('have.class', 'disabled');
        });
        it('will verify footer is not visible when right magnet is selected', ()=>{
            footer.getCenterBarPolarityToggle().should('not.be.visible');
        });
        it('will verify that correct magnet is shown when bar magnet is selected from the left', ()=> {
            // header.selectMagnetLeft(); Header is already showing
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('exist');
        });
        it('will verify that left bar magnet is not selectable',()=>{
            header.getBarMagLeftLabel().should('be.visible');
            header.getBarMagLeftLabel().parent().should('not.have.class','selectable');
        });
        it('will verify correct footer is visible when left bar magnet is selected', ()=>{
            footer.getCenterBarPolarityToggle().should('be.visible');
        });
        it('will verify that correct magnet is shown when coil magnet is selected from the left', ()=>{
            // header.selectMagnetLeft();
            header.selectCoilMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.coil').should('exist');
        });
        it('will verify that left coil magnet is not selectable',()=>{
            header.getCoilMagLeftLabel().should('be.visible');
            header.getCoilMagLeftLabel().parent().should('not.have.class','selectable');
        });
        it('will verify that different combinations of left and right magnets come up correctly', ()=>{
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('exist');
            cy.get('.main-content').matchImageSnapshot('left_bar');
            //mainapp should not be able to move the magnet
            header.selectBarMagRight();
            header.getSelectedMagRight().siblings('.nav-magnet.right.bar').should('exist');
            //mainapp shows two bar magnets
            cy.get('.main-content').matchImageSnapshot('left_bar_right_bar');
            header.selectCoilMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.coil').should('exist');
            //mainapp shows a coil magnet and a bar magnet
            cy.get('.main-content').matchImageSnapshot('left_coil_right_bar');
            header.selectCoilMagRight();
            header.getSelectedMagRight().siblings('.nav-magnet.right.coil').should('exist');
            //mainapp shows two coil magnets
            cy.get('.main-content').matchImageSnapshot('left_coil_right_coil');
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('exist');
            //mainapp shows a bar and a coil
            cy.get('.main-content').matchImageSnapshot('left_bar_right_coil');
        });
        it('will verify only right magnet is removed when both left and right magnets are present', ()=> {
            header.removeMagRight();
            header.getUnselectMagnetRight().should('be.visible');
            cy.get('.main-content').matchImageSnapshot('remove_right_mag');
        });
    })
});