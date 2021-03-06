package com.testCase;

import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.baseClass.Library;
import com.pages.AdminPage;
import com.pages.LoginPage;
import com.seleniumReusableFunctions.SeleniumUtilities;

public class AdminTestCase extends Library{
	AdminPage adminpage;
	/*
	 @BeforeTest annotation is not working
	  for parralel excecution ,If it changed 
	  to @Test then its working fine
	 */
	
	//@BeforeTest
	    @Test
		public void startup() {
		//launchApplication("chrome","https://opensource-demo.orangehrmlive.com/");
		browserSetUp();
		logger.info("Browser Launched and navigate to URL");
	
	}
	@Test(priority =1)
	public void login() {
		LoginPage lpage=new LoginPage(driver);
		String usname = properties.getProperty("username");//taking values from config property
		String pwd = properties.getProperty("pass");//taking values from config property
		lpage.login(usname, pwd);
		//lpage.login("Admin", "admin123");
		logger.info("Login successful");
	}
	
	
	  @Test(priority =2)
	  public void adminClick() { 
		  adminpage = new AdminPage(driver); 
		  adminpage.adminClick();
	  //adminpage.searchuser("kevin","All","Kevin Mathews","Enabled");
		
		  adminpage.searchuser(properties.getProperty("searchUsername"),
		  properties.getProperty("searchRole"),
		  properties.getProperty("searchEmpNamesearch"),
		  properties.getProperty("Status"));
		 
	  
	  
	  }
	 
	 
}
