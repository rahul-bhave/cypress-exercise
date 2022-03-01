class ProductPage
{

getDropDown()
{
    return cy.get("span[id='dropdown_selected_size_name'] span[class='a-button-text a-declarative']")
}
selectSize()
{
    return cy.get('#native_dropdown_selected_size_name_21')
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

}

export default ProductPage;