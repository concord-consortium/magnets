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
            cy.get('.main-content').matchImageSnapshot('field_lines_off');
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('cloud_on');
            footer.turnOffCloud();
            footer.getMagneticFieldCloudToggle().should('contain','OFF');
            cy.get('.main-content').matchImageSnapshot('cloud_off');
            footer.turnOnPointers();
            footer.getMagneticFieldPointersToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('pointers_on');
            footer.turnOffPointers();
            footer.getMagneticFieldPointersToggle().should('contain','OFF');
            cy.get('.main-content').matchImageSnapshot('pointers_off');
        });
        it('will turn on mag field representations in combinations',()=>{
            footer.turnOnFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','ON');
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('field_lines_on_cloud_on');
            footer.turnOffCloud();
            footer.getMagneticFieldCloudToggle().should('contain','OFF');
            cy.get('.main-content').matchImageSnapshot('field_lines_on_cloud_off');
            footer.turnOnPointers();
            footer.getMagneticFieldPointersToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('field_lines_on_pointers_on');
            footer.turnOffFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','OFF');
            cy.get('.main-content').matchImageSnapshot('field_lines_off_pointers_on');
            footer.turnOnCloud();
            footer.getMagneticFieldCloudToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('cloud_on_pointers_on');
            footer.turnOnFieldLines();
            footer.getMagneticFieldFieldLinesToggle().should('contain','ON');
            cy.get('.main-content').matchImageSnapshot('field_lines_on-cloud_on_pointers_on');
        });
        it('will change field strength', ()=>{
            footer.changeFieldStrength(2);
            cy.get('.main-content').matchImageSnapshot('field_strength_2');
            footer.changeFieldStrength(3);
            cy.get('.main-content').matchImageSnapshot('field_strength_3');
            footer.changeFieldStrength(1);
            cy.get('.main-content').matchImageSnapshot('field_strength_1');
            footer.changeFieldStrength(3);
            cy.get('.main-content').matchImageSnapshot('field_strength_3_1');
            footer.changeFieldStrength(2);
            cy.get('.main-content').matchImageSnapshot('field_strength_2_3');
        })

    })
})