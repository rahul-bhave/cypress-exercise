/// <reference types="Cypress" />
import HomePage from '../../../pageobjects/HomePage';
import ProductPage from '../../../pageobjects/ProductPage';
import CartPage from '../../../pageobjects/CartPage';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//creating object of HomePage,ProductPage and CartPage
const homePage=new HomePage();
const productPage=new ProductPage();
const cartPage=new CartPage();

Given('I am on the home page', () => { 
  //accessing URL
  cy.visit(Cypress.env('url'));
  Cypress.config('defaultCommandTimeout', 8000);
})

When('I search for a product shoes', function() {
  //searching for shoes
  homePage.getSearchBox().type(this.data.productname)
    
  //submitting the search
  homePage.submitSearch().should('be.visible').click();
  Cypress.config('defaultCommandWaitTimeout', 2000);

  //validating results to show only shows are searched by searching keywords as shoes
  homePage.getSearchResult().should('contain',this.data.searchtext);
})

Then('I should see the product shoes', function() {
    //validating results to show only shows are searched by searching keywords as shoes
    homePage.getSearchResult().should('contain',this.data.searchtext);
})

When("I filter the product by filter adidas and Men's shoes", function() {
    //clicking on first filter as adidas
    homePage.getFirstFilter().should('be.visible').click();
    Cypress.config('defaultCommandWaitTimeout', 2000);

    //validating that checkbox containing adidas is selected
    homePage.checkFirstFilter().should('contain',this.data.firstfilter);
    
    //clicking second filter as Men's Fashion
    homePage.getSecondFilter().should('be.visible').click();
    Cypress.config('defaultCommandWaitTimeout', 2000);

    //validating that Men's fassion filter is applied
    homePage.checkSecondFilter().should('contain',this.data.secondfilter)
    Cypress.config('defaultCommandWaitTimeout', 2000);

})

Then('I should get the results', function(){
    //check that at least 48 items are shown
    homePage.getResultCountOnOnePage().should('have.length.at.least',this.data.resultsonpage)
    Cypress.config('defaultCommandWaitTimeout', 2000);

})

When('I add the product to cart',function(){
    //visting the specific product adidas Grand court black and white shoes
    cy.selectProduct(this.data.selectedproduct);

    //Select the size of the shoe as 10
    productPage.getDropDown().should('be.visible').click();
    productPage.selectSize().should('be.visible').click();
    
    //Add the shoe to the cart
    productPage.addToCart().should('be.visible').click();
    Cypress.config('defaultCommandTimeout', 8000);

    //validating the product added to the cart is Adidas Mens shoes
    productPage.getProductTitle().should('contain',this.data.producttitle);
    Cypress.config('defaultCommandWaitTimeout', 2000);

    //check that Alert shown as added as well as 1 item in the cart
    productPage.getAlert().should('contain',this.data.alert);
    Cypress.config('defaultCommandWaitTimeout', 2000);
})

Then('I should see the product in cart',function(){
    //selecting cart
    cy.selectCart(this.data.cart);
    Cypress.config('defaultCommandTimeout', 8000);

    //validating the count on the cart
    cartPage.getCartCount().should('contain',this.data.cartcount);
})
