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
        it('will turn on mag field representations separately', ()=>{ //Need to turn field representations first so that changing field strength is more visible
            footer.turnOnFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('field_lines_on');
            footer.turnOffFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','OFF');
            //TODO: take snapshot
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            //TODO: take snapshot
            footer.turnOffCloud();
            footer.getMagneticFieldCloudToggle().should('contain','OFF');
            //TODO: take snapshot
            footer.turnOnPointers();
            footer.getMagneticFieldPointersToggle().should('contain','ON');
            //TODO: take snapshot
            footer.turnOffPointers();
            footer.getMagneticFieldPointersToggle().should('contain','OFF');
            //TODO: take snapshot
        });
        it('will turn on mag field representations in combinations',()=>{
            footer.turnOnFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','ON');
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            //TODO:take snapshot
            footer.turnOffCloud();
            footer.getMagneticFieldCloudToggle().should('contain','OFF');
            //TODO: take snapshot
            footer.turnOnPointers();
            footer.getMagneticFieldPointersToggle().should('contain','ON');
            //TODO: take snapshot
            footer.turnOffFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','OFF');
            //TODO: take snapshot
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            //TODO: take snapshot
            footer.turnOnFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','ON');
            //TODO: take snapshot
        });
        it('will change field strength', ()=>{
            footer.changeFieldStrength(2);
            //TODO: take snapshot
            footer.changeFieldStrength(3);
            //TODO: take snapshot
            footer.changeFieldStrength(1);
            //TODO: take snapshot
            footer.changeFieldStrength(3);
            //TODO: take snapshot
            footer.changeFieldStrength(2);
            //TODO: take snapshot
        })

    })
})