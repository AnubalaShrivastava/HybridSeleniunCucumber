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
formatter.scenarioOutline({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter \"\u003cuname\u003e\" and \"\u003cpas\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "pas"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FL730MCA\u0027, ip: \u002710.0.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00CA87E3+2852835]\n\tOrdinal0 [0x00B95BB1+1727409]\n\tOrdinal0 [0x00A6E362+516962]\n\tOrdinal0 [0x00A67D82+490882]\n\tOrdinal0 [0x00A6846B+492651]\n\tOrdinal0 [0x00A693C5+496581]\n\tOrdinal0 [0x00A64D64+478564]\n\tOrdinal0 [0x00A6F300+520960]\n\tOrdinal0 [0x00A1E489+189577]\n\tOrdinal0 [0x00A1D7FD+186365]\n\tOrdinal0 [0x00A1B70B+177931]\n\tOrdinal0 [0x00A02584+75140]\n\tOrdinal0 [0x00A03650+79440]\n\tOrdinal0 [0x00A035E9+79337]\n\tOrdinal0 [0x00BAAD5C+1813852]\n\tGetHandleVerifier [0x00DCC616+1075574]\n\tGetHandleVerifier [0x00DCC367+1074887]\n\tGetHandleVerifier [0x00DD7497+1120247]\n\tGetHandleVerifier [0x00DCCC16+1077110]\n\tOrdinal0 [0x00BA3206+1782278]\n\tOrdinal0 [0x00BAC3BB+1819579]\n\tOrdinal0 [0x00BAC523+1819939]\n\tOrdinal0 [0x00BC2B45+1911621]\n\tBaseThreadInitThunk [0x77636359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77967C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77967BF4+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.baseClass.Library.browserSetUp(Library.java:57)\r\n\tat com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL(LoginStepsWithDataDriven.java:17)\r\n\tat ✽.launch the browser and navigate to the URL(file:///C:/Users/bala_/git/HybridSeleniunCucumber/HybridSeleniumCucumber/src/test/resources/Features/TestCase.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter \"Admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.get_the_page_title_and_get_screen_shot()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To check the login functionality of OrangeHRM with data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch the browser and navigate to the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-FL730MCA\u0027, ip: \u002710.0.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\bala_\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58105}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 78c8b0c93ba9a8d2b0fea92042cb3fca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\r\n\tat com.baseClass.Library.browserSetUp(Library.java:84)\r\n\tat com.stepDefinition.LoginStepsWithDataDriven.launch_the_browser_and_navigate_to_the_URL(LoginStepsWithDataDriven.java:17)\r\n\tat ✽.launch the browser and navigate to the URL(file:///C:/Users/bala_/git/HybridSeleniunCucumber/HybridSeleniumCucumber/src/test/resources/Features/TestCase.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter \"Admin\" and \"admin12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.click_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Get the page title and  get screen shot",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginStepsWithDataDriven.get_the_page_title_and_get_screen_shot()"
});
formatter.result({
  "status": "skipped"
});
});