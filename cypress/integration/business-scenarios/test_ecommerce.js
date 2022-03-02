/// <reference types="Cypress" />
import HomePage from '../pageobjects/HomePage';
import ProductPage from '../pageobjects/ProductPage';
import CartPage from '../pageobjects/CartPage';

describe('Ecommerce Test', function() 
{

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {this.data=data
        })
   })
it('Searching,filtering and adding product', function()
  
{
    //creating object of HomePage,ProductPage and CartPage
    const homePage=new HomePage();
    const productPage=new ProductPage();
    const cartPage=new CartPage();

    //accessing URL
    cy.visit(Cypress.env('url'));
    cy.wait(10000);

    //searching for shoes
    homePage.getSearchBox().type(this.data.productname)
    cy.wait(2000);
    
    //submitting the search
    homePage.submitSearch().click();
    cy.wait(2000);

    //validating results to show only shows are searched by searching keywords as shoes
    homePage.getSearchResult().should('contain',this.data.searchtext);
    cy.wait(2000);

    //clicking on first filter as adidas
    homePage.getFirstFilter().click();
    cy.wait(2000);

    //validating that checkbox containing adidas is selected
    homePage.checkFirstFilter().should('contain',this.data.firstfilter);
    cy.wait(2000);
    
    //clicking second filter as Men's Fashion
    homePage.getSecondFilter().click();
    cy.wait(2000);

    //validating that Men's fassion filter is applied
    homePage.checkSecondFilter().should('contain',this.data.secondfilter)
    cy.get(5000);
    
    //check that at least 48 items are shown
    homePage.getResultCountOnOnePage().should('have.length.at.least',this.data.resultsonpage)
    cy.get(2000);
        
    //visting the specific product adidas Grand court black and white shoes
    cy.selectProduct(this.data.selectedproduct);
    
    //Select the size of the shoe as 10
    productPage.getDropDown().click();
    productPage.selectSize().click();
    cy.get(50000);

    //Add the shoe to the cart
    productPage.addToCart().click();
    cy.get(10000);

    //validating the product added to the cart is Adidas Mens shoes
    productPage.getProductTitle().should('contain',this.data.producttitle);
    cy.get(50000);

    //validating the product added to the cart is Adidas Mens shoes
    productPage.getProductTitle().should('contain',this.data.producttitle);
    cy.get(2000);
    
    //check that Alert shown as added as well as 1 item in the cart
    productPage.getAlert().should('contain',this.data.alert);
    cy.get(10000);

    //selecting cart
    //cy.visit(this.data.cart);
    cy.selectCart(this.data.cart);
    cy.get(50000);

    //validating the count on the cart
    cartPage.getCartCount().should('contain',this.data.cartcount);
    
})
})