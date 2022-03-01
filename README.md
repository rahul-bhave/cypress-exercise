# cypress-exercise


## How to launch cypress:
1. Launch the powershell and run the following command:
    npm run cypress:open

    > cypress-exercise@1.0.0 cypress:open
    > cypress open

2. Cypress window will be launched. You can use cypress test runner to launch the test case `test_ecommerce.js` by clicking on the test name in the test runner console.\

## Files used in this exercise:
1. cypress-exercise/cypress.json
2. cypress-exercise/cypress/integration/business-scenarios/test_ecommerce.js
3. cypress-exercise/cypress/integration/page_objects/home_page.js
4. cypress-exercise/cypress/integration/page_objects/product_page.js
5. cypress-exercise/cypress/integration/page_objects/cart_page.js
6. cypress-exercise/cypress/support/commands.js

## Test flow:

3. Created one sample test the test flow goes as follows:\
    3.1. Access the ecommerce website.\
    3.2. On the homepage, search for the "shoes"-> Validate here search results are displayed validating keyword as "shoes".\
    Enhancement: Since did not have any access to the databases, could not validate the count of serach results.\
    3.3. Apply the  first filter "adidas"-> Validate here that, checkbox selected for serach criteria.\
    3.4. Apply the second filter "Men's Fashion"-> Validate here that, Mens' Fashion selected also one additional validation applied to check at least 48 items are retrieved here after selecting filter.\
    3.5. Search for particular product->"adidas Men's Grand Court Tennis Shoes"\
    Note: This is one of the assumption I have taken as this is commonaly available product on the site. Tried multiple products and found that this product is commonaly available.\
    3.6. Validate that that product details page is displayed after selecting the product.\
    3.7. Select the size of the product->"Size10"\
    Note: Again here was not sure, which size will always have data available, in case this size is not available then the test might fail.\
    3.8. Add the product to the cart.\
    3.9. Validate that the product title is "adidas Men's Grand Court Tennis Shoes" as per the search filters.\
    3.10. Validate that the alert on the selected product cart is shown as "Added", \
    Note: Here another check could be added to check the "Add to cart" is disabled.\
    3.11. On the cart menu, 1 item is added.\

## Open Items from the test flow:

4. Open items:\
    4.1. Currently test can be run only via cypress test runner.\
    4.2. Smart Wait function to be added, so lot of waits added in the test can be avoided, also this will reduce the flakiness of the test.\
    4.3. CI-CD pipeline needs to be setup for the test repo.\
    4.4. Test reporting and screenshots to be configured for the repo.\
    4.5. Locators to be added in the configuration file.
