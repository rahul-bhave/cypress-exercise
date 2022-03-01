class HomePage
{

getSearchBox()
{
    return cy.get('#twotabsearchtextbox').as ('searchbox');
}
submitSearch()
{
    return cy.get('#nav-search-submit-button');
}
getSearchResult()
{
    return cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(3)');
}
getFirstFilter()
{
    return cy.get('body > div:nth-child(1) > div:nth-child(30) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(4) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)')
}
checkFirstFilter()
{
    return cy.get("a[class='a-link-normal s-navigation-item'] span[class='a-size-base a-color-base a-text-bold']");
}
getSecondFilter()
{
    return cy.get('body > div:nth-child(1) > div:nth-child(30) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1) > a:nth-child(1) > span:nth-child(1)');

}
checkSecondFilter()
{
    return cy.get("ul[class='a-unordered-list a-nostyle a-vertical a-spacing-medium'] li[class='a-spacing-micro s-navigation-indent-1'] span[class='a-size-base a-color-base a-text-bold']");
}
getResultCountOnOnePage()
{
    return cy.get("span[class='a-size-base-plus a-color-base a-text-normal']")
}
}

export default HomePage;