import Header from './elements/Header'
import Footer from './elements/Footer'
import MainSpace from './elements/MainSpace'

const header = new Header;
const footer = new Footer;
const mainSpace = new MainSpace;

context('Test whole workspace layout', ()=>{
    before(() => {
        cy.visit("localhost:8080");
    });
    describe('Header', ()=>{
        it('will verify workspace is empty when no magnets are selected', ()=>{
            header.selectMagnetLeft();
            footer.getFooter().should('not.be.visible');

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
            footer.getFooter().should('not.be.visible');
        });
        it('will verify that correct magnet is shown when bar magnet is selected from the left', ()=> {
            // header.selectMagnetLeft(); Header is already showing
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('be.visible');
        });
        it('will verify that correct magnet is shown when coil magnet is selected from the left', ()=>{
            // header.selectMagnetLeft();
            header.selectCoilMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.coil').should('be.visible');
        });
        it('will verify footer is visible when left magnet is selected', ()=>{
            footer.getFooter().should('be.visible');
        });
        it('will verify that different combinations of left and right magnets come up correctly', ()=>{
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('be.visible');
            //mainapp shows bar magnet - cypress take a screenshot?
            //mainapp should not be able to move the magnet
            header.selectBarMagRight();
            header.getSelectedMagRight().siblings('.nav-magnet.right.bar').should('be.visible');
            //mainapp shows two bar magnets
            //mainapp should have one bar that cannot be moved, and another that can be moved
            header.selectCoilMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.coil').should('be.visible');
            //mainapp shows a coil magnet and a bar magnet
            //mainapp should have one coil that cannot be moved, and a bar that can be moved
            header.selectCoilMagRight();
            header.getSelectedMagRight().siblings('.nav-magnet.right.coil').should('be.visible');
            //mainapp shows two coil magnets
            //mainapp should have one coil that cannot be moved, and another that can be moved
            header.selectBarMagLeft();
            header.getSelectedMagLeft().siblings('.nav-magnet.left.bar').should('be.visible');
            //mainapp shows a bar and a coil
            //mainapp should have one coil that cannot be moved, and the bar that can be moved
        });
        it('will verify only right magnet is removed when both left and right magnets are present', ()=>{
            header.removeMagRight();
            header.getSelectAMagnetRight().should('be.visible');
            //mainspace should have a fixed bar magnet
        });

    })
    describe.only('Footer', ()=>{
        it('will toggle the polarity for center bar and verify correct polarity',()=>{
            footer.changeCenterPolarity();
            footer.getCenterPolarityButton().text().should('contain', 'S-N');
            //TODO: verify magnet in canvas is showing correct polarity
            footer.changeCenterPolarity();
            footer.getCenterPolarityButton().text().should('contain','N-S')
        });

    })
})
