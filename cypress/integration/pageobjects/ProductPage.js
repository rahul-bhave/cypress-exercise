class ProductPage
{

getDropDown()
{
    return cy.get("span[id='dropdown_selected_size_name'] span[class='a-button-text a-declarative']")
}
selectSize()
{
    return cy.get("div[id='a-popover-3'] div[class='a-popover-wrapper'] div[class='a-popover-inner'] li[id='size_name_10']")
}
addToCart()
{
    return cy.get("span[id='mbc-buybutton-addtocart-1'] input[type='submit']")
}
getProductTitle()
{
    return cy.get("span[id='productTitle']")
}
getAlert()
{
    return cy.get("div[id='mbc-offer-added-to-cart-1'] div[class='a-alert-content']")
}

getViewCart()
{
   return cy.get("span[id='mbc-offer-view-cart-1'] input[type='submit']")
}
}
export default ProductPage;