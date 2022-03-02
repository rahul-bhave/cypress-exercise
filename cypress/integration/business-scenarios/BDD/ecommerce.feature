Feature: End to end ecommerce validation

    Searching,filtering and adding product

    Scenario: Ecommerce product search,filter and add to cart
    Given I am on the home page
    When I search for a product shoes
    Then I should see the product shoes
    When I filter the product by filter adidas and Men's shoes
    Then I should get the results
    When I add the product to cart
    Then I should see the product in cart