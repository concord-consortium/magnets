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
    it('setup for single magnet', ()=>{

        header.selectMagnetLeft();
        header.selectBarMagLeft();
    })
    describe('Footer', ()=>{
        it('will toggle the polarity for center bar and verify correct polarity',()=>{
            footer.changeCenterPolarity();
            footer.getCenterBarPolarityToggle().should('have.text', 'S-N');
            //TODO: verify magnet in canvas is showing correct polarity
            footer.changeCenterPolarity();
            footer.getCenterBarPolarityToggle().should('have.text','N-S')
        });
        it('will turn on mag field representations', ()=>{ //Need to turn field representations first so that changing field strength is more visible

        });
        it('will change field strength', ()=>{
            footer.changeFieldStrength(2);
            footer.changeFieldStrength(3);
            footer.changeFieldStrength(1);
            footer.changeFieldStrength(3);
            footer.changeFieldStrength(2);
        })

    })
})