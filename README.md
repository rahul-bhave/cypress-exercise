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
    4.1. Currently test can be run from terminal using command `npm run ecommerceTest`\

```
    PS C:\Users\rahulbhave\code\cypress-exercise> npm run ecommerceTest      

> cypress-exercise@1.0.0 ecommerceTest
> npm run test -- --spec "cypress/integration/business-scenarios/*"


> cypress-exercise@1.0.0 test
> node_modules\.bin\cypress run "--spec" "cypress/integration/business-scenarios/*"



====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        9.2.1                                                                          │
  │ Browser:        Electron 94 (headless)                                                         │
  │ Node Version:   v16.13.2 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (business-scenarios/test_ecommerce.js)                                 │
  │ Searched:       cypress\integration\business-scenarios\*                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  business-scenarios/test_ecommerce.js                                            (1 of 1)
  Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db

  Why you should do it regularly:
   https://github.com/browserslist/browserslist#browsers-data-updating


  Ecommerce Test
    √ Searching,filtering and adding product (107183ms)


  1 passing (2m)

[mochawesome] Report JSON saved to C:\Users\rahulbhave\code\cypress-exercise\mochawesome-report\mochawesome.json

[mochawesome] Report HTML saved to C:\Users\rahulbhave\code\cypress-exercise\mochawesome-report\mochawesome.html


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     1 minute, 53 seconds                                                             │
  │ Spec Ran:     business-scenarios/test_ecommerce.js                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: C:\Users\rahulbhave\code\cypress-exercise\cypress\videos\bu   (24 seconds)
                          siness-scenarios\test_ecommerce.js.mp4

    Compression progress:  100%

   ====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  business-scenarios/test_ecommerce.j      01:53        1        1        -        -        - │
  │    s                                                                                           │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        01:53        1        1        -        -        -

    PS C:\Users\rahulbhave\code\cypress-exercise>


    ```

    4.2. Smart Wait function to be added, so lot of waits added in the test can be avoided, also this will reduce the flakiness of the test.\
    4.3. CI-CD pipeline needs to be setup for the test repo.\
    4.4. Locators to be added in the configuration file.
    4.5. Need to provide support for BDD Framework.
