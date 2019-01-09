import Header from './elements/Header'
import Footer from './elements/Footer'
import MainSpace from './elements/MainSpace'

const header = new Header;
const footer = new Footer;
const mainSpace = new MainSpace;

context('Test footer area', ()=>{
    before(() => {
        cy.visit("localhost:8080");
    });
    describe('setup for single magnet', ()=>{
        header.selectMagnetLeft();
        header.selectBarMagLeft()
    })
    describe('Footer', ()=>{
        it('will toggle the polarity for center bar and verify correct polarity',()=>{
            footer.changeCenterPolarity();
            footer.getCenterPolarityButton().text().should('contain', 'S-N');
            //TODO: verify magnet in canvas is showing correct polarity
            footer.changeCenterPolarity();
            footer.getCenterPolarityButton().text().should('contain','N-S')
        });

    })
})