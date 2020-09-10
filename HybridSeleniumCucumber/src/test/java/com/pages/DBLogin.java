package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.Library;
import com.utilities.DBconnector;
import com.utilities.User;

public class DBLogin extends Library{
	
	@FindBy(name="txtUsername")
	WebElement myusername;
	
	@FindBy(name="txtPassword")
	WebElement mypassword;
	
	@FindBy(id ="btnLogin")
	WebElement submit;
	DBconnector connector;
	User userDetails;
	
	public DBLogin(WebDriver driver) {
		PageFactory.initElements(driver,this);
	}
	
	public void login() {
		connector = new DBconnector();
		userDetails = connector.getCredentialsFromDB();
		
		myusername.sendKeys(userDetails.getUserName());
		mypassword.sendKeys(userDetails.getPassword());
		submit.click();
		
	}

}
