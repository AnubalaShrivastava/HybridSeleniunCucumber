Feature: Test the OrangeHRM Application

Scenario: To check the login functionality of OrangeHRM
Given To launch the browser and navigate to the URL
When Enter user name and password
Then click login button
Then Get the page title and screen shot

Scenario Outline:To check the login functionality of OrangeHRM with data Driven
Given launch the browser and navigate to the URL
When Enter "<uname>" and "<pas>"
Then click submit button
Then Get the page title and  get screen shot

Examples:
|uname|pas|
|Admin|admin123|
|Admin|admin12345|
