Feature: The Registration

  I want to regiter new user
  
  @focus
  Scenario: Register new user
    Given I open registration page
    When I fill the input "firstNameInput" with the "test11" term
    When I fill the input "lastNameInput" with the "test11" term
    When I fill the input "userNameInput" with the "test11" term
    When I fill the input "passwordInput" with the "test11" term
    When I press button "registerButton"
    Then I press link "userListLink"

 @focus
 Scenario: Register new user login 
   Given I open registration page
   When I fill the input "firstNameInput" with the "test111" term
   When I fill the input "lastNameInput" with the "test111" term
   When I fill the input "userNameInput" with the "test111" term
   When I fill the input "passwordInput" with the "test111" term
   When I press button "registerButton"
   Then I press link "loginLink"
   Then I fill the input "userNameInput" with the "test111" term
   Then I fill the input "passwordInput" with the "test111" term
   Then I press button "loginButton"
   Then I see button "logoutButton"