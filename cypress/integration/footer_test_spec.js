import Header from '../support/elements/Header'
import Footer from '../support/elements/Footer'
import MainSpace from '../support/elements/MainSpace'

const header = new Header;
const footer = new Footer;
const mainSpace = new MainSpace;

context('Test footer area', ()=>{
    before(() => {
        cy.visit("localhost:8080");
    });
    it('setup for single bar magnet', ()=>{
        header.selectMagnetLeft();
        header.selectBarMagLeft();
    });
    describe('Footer or One bar test', ()=>{
        it('will toggle the polarity for center bar and verify correct polarity',()=>{
            footer.changeCenterBarPolarity();
            footer.getCenterBarPolarityToggle().should('have.text', 'S-N');
            cy.wait(3111);
            cy.get('.main-content').matchImageSnapshot('polarity_S-N');
            footer.changeCenterBarPolarity();
            footer.getCenterBarPolarityToggle().should('have.text','N-S');
            cy.wait(3111);
            cy.get('.main-content').matchImageSnapshot('polarity_N-S');
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
            footer.changeCenterBarFieldStrength(1);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_2_1');
            footer.changeCenterBarFieldStrength(2);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_1_2');
            footer.changeCenterBarFieldStrength(3);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_2_3');
            footer.changeCenterBarFieldStrength(1);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_3_1');
            footer.changeCenterBarFieldStrength(3);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_1_3');
            footer.changeCenterBarFieldStrength(2);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('field_strength_3_2');
        });
    })
    describe('Footer or One coil test', ()=>{
        before(() => {
            cy.visit("localhost:8080");
        });
        it('setup for single coil magnet', ()=>{
            header.selectMagnetLeft();
            header.selectCoilMagLeft();
        });
        it('will change the polarity for center coil and verify correct polarity',()=>{
            footer.changeCenterCoilPolarity(2);
            // footer.getCenterCoilPolaritySlider().sibling('.thumb-label').should('have.text', 'OFF');
            cy.get('.main-content').matchImageSnapshot('polarity_+-_Off');
            footer.changeCenterCoilPolarity(3);
            // footer.getCenterCoilPolaritySlider().sibling('.thumb-label').should('not.exist');
            cy.get('.main-content').matchImageSnapshot('coil_polarity_Off_-+');
            footer.changeCenterCoilPolarity(1);
            // footer.getCenterCoilPolaritySlider().sibling('.thumb-label').should('not.exist');
            cy.get('.main-content').matchImageSnapshot('polarity_-+_+-');
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
            footer.changeCenterCoilNumCoils(0.5);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('num_coil_75_5');
            footer.changeCenterCoilNumCoils(0.75);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('num_coil_5_75');
            footer.changeCenterCoilNumCoils(1);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('num_coil_75_1');
            footer.changeCenterCoilNumCoils(0.5);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('num_coil_1_5');
            footer.changeCenterCoilCurrent(0.5);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('current_75_5');
            footer.changeCenterCoilCurrent(0.75);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('current_5_75');
            footer.changeCenterCoilCurrent(0.1);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('current_75_1');
            footer.changeCenterCoilNumCoils(1);
            cy.wait(1111);
            cy.get('.main-content').matchImageSnapshot('num_coil_1_current_1');
        });
    })
});