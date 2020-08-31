$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TestCase.feature");
formatter.feature({
  "name": "Test the OrangeHRM Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.to_launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.enter_user_name_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the page title and screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.get_the_page_title_and_screen_shot()"
});
formatter.result({
  "status": "passed"
});
});