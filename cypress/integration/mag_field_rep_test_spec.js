import Header from './elements/Header'
import Footer from './elements/Footer'
import MainSpace from './elements/MainSpace'

const header = new Header;
const footer = new Footer;
const mainSpace = new MainSpace;

context('Mag field controls', ()=>{
   describe('change the representation for left bar',()=>{
       it('will turn on field lines', ()=>{
           header.selectBarMagLeft();
           footer.turnOnFieldLines();
           //mainspace should have field lines or take a screenshot
           footer.turnOffFieldLines()
       });
       it('will turn on cloud', ()=>{
           header.selectBarMagLeft();
           footer.turnOnCloud();
           //mainspace should have field lines or take a screenshot
           footer.turnOffCloud();
       });
       it('will turn on pointers', ()=>{
           header.selectBarMagLeft();
           footer.turnOnPointers();
           //mainspace should have field lines or take a screenshot
           footer.turnOffPointers();
       });
   });
    describe('change the representation for left coil',()=>{
        it('will turn on field lines', ()=>{
            header.selectCoilMagLeft();
            footer.turnOnFieldLines();
            //mainspace should have field lines or take a screenshot
            footer.turnOffFieldLines()
        });
        it('will turn on cloud', ()=>{
            header.selectCoilMagLeft();
            footer.turnOnCloud();
            //mainspace should have field lines or take a screenshot
            footer.turnOffCloud();
        });
        it('will turn on pointers', ()=>{
            header.selectCoilMagLeft();
            footer.turnOnPointers();
            //mainspace should have field lines or take a screenshot
            footer.turnOffPointers();
        });
    });
    describe('change polarity', ()=>{
        it('will change polarity of fixed magnet', ()=>{
            footer.changeLeftPolarity();
            //verify polarity changed
        })
    });
    describe('change field strength', ()=>{
        it('will change field strenghts to different values', ()=>{
            footer.changeFieldStrength(1)
            //verify canvas
            footer.changeFieldStrength(3);
            //verify canvas
            footer.changeFieldStrength(2)
            //verify canvas
        })

    });
});