/// <reference types= "cypress"/>

describe('Test for Searching,filtering and adding product on the ecommerce site', function()
{
it('Searching,filtering and adding product', function()
{
    //accessing URL
    cy.visit("https://www.amazon.com/");

    //searching for shoes
    cy.get('#twotabsearchtextbox').type('shoes');
    cy.wait(2000);
    
    //submitting the search
    cy.get('#nav-search-submit-button').click();
    cy.wait(2000);

    //validating results to show only shows are searched by searching keywords as shoes
    cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(3)').should('contain','"shoes"');
    cy.wait(2000);

    //clicking on first filter as adidas
    cy.get('body > div:nth-child(1) > div:nth-child(30) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(4) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)').click();
    cy.wait(2000);

    //validating that checkbox containing adidas is selected
    cy.get("a[class='a-link-normal s-navigation-item'] span[class='a-size-base a-color-base a-text-bold']").should('contain', 'adidas');
    
    //clicking second filter as Men's Fashion
    cy.get('body > div:nth-child(1) > div:nth-child(30) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1) > a:nth-child(1) > span:nth-child(1)').click();
    cy.wait(2000);

    //validating that Men's fassion filter is applied
    cy.get("ul[class='a-unordered-list a-nostyle a-vertical a-spacing-medium'] li[class='a-spacing-micro s-navigation-indent-1'] span[class='a-size-base a-color-base a-text-bold']").should('contain',"Men's Fashion");
    cy.get(2000);
    
    //check that at least 48 items are shown
    cy.get("span[class='a-size-base-plus a-color-base a-text-normal']").should('have.length.at.least', 48)

    //visting first product
    //cy.visit('https://www.amazon.com/adidas-Grand-Court-Black-White/dp/B07DBGLVLL/ref=sr_1_2?keywords=shoes&qid=1645715451&refinements=p_89%3Aadidas&rnid=7141123011&s=apparel&sr=1-2')
    cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-size-base-plus a-color-base a-text-normal']").click();

    //Select the size of the shoe as 10
    cy.get("span[id='dropdown_selected_size_name'] span[class='a-button-text a-declarative']").click();
    cy.get('#native_dropdown_selected_size_name_8').click();

    //Add the shoe to the cart
    cy.get("span[id='mbc-buybutton-addtocart-1'] input[type='submit']").click();
    cy.get(2000);

    //check that Alert shown as added as well as 1 item in the cart
    cy.get("div[id='mbc-offer-added-to-cart-1'] div[class='a-alert-content']").should('contain', 'Added');
    cy.get(2000);
    //return cy.get("div[id='nav-belt'] div[id='nav-cart-count-container'] span[class='nav-cart-count nav-cart-1 nav-progressive-attribute nav-progressive-content']")

    })
   
}
)