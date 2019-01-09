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

})
