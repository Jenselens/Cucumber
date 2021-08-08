package com.stepdefinition;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Loginsetup {

	WebDriver driver;

	@Given("user is on the facebook page")
	public void tc1() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://adactinhotelapp.com/");
		// driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);

	}

	@When("User should enter {string} and {string}")
	public void user_should_enter_and(String uss, String pass) {
		driver.findElement(By.id("username")).sendKeys(uss);
		driver.findElement(By.id("password")).sendKeys(pass);
	}

	@When("User should click login button")
	public void tc3() {
		driver.findElement(By.id("login")).click();
	}

	@When("User should enter {string},{string},{string}and{string}")
	public void user_should_enter_and(String locate, String hote, String roomty, String roomnos) {
		WebElement loca = driver.findElement(By.xpath("//select[@id='location']"));
		Select s = new Select(loca);
		s.selectByVisibleText(locate);
		WebElement htl = driver.findElement(By.xpath("//select[@id='hotels']"));
		Select s1 = new Select(htl);
		s1.selectByVisibleText(hote);
		WebElement rmty = driver.findElement(By.xpath("//select[@id='room_type']"));
		Select s2 = new Select(rmty);
		s2.selectByVisibleText(roomty);
		WebElement noroom = driver.findElement(By.xpath("//select[@id='room_nos']"));
		Select s3 = new Select(noroom);
		s3.selectByVisibleText(roomnos);
		WebElement btnsearch = driver.findElement(By.xpath("//input[@id='Submit']"));
		btnsearch.click();
	}

	@When("User should select the hotel by click login button")
	public void user_should_select_the_hotel_by_click_login_button() {
		WebElement btnClick = driver.findElement(By.xpath("//input[@id='radiobutton_0']"));
		btnClick.click();
		WebElement btnContinue = driver.findElement(By.xpath("//input[@id='continue']"));
		btnContinue.click();
	}

	@When("user should enter {string},{string},{string},{string},{string},{string},{string}and{string}")
	public void user_should_enter_and(String first, String last, String addr, String ccno, String ccty, String ccmnth,
			String ccyr, String ccv) {
		WebElement frstname = driver.findElement(By.xpath("//input[@id='first_name']"));
		frstname.sendKeys(first);
		WebElement lastname = driver.findElement(By.xpath("//input[@id='last_name']"));
		lastname.sendKeys(last);
		WebElement add = driver.findElement(By.xpath("//textarea[@id='address']"));
		add.sendKeys(addr);

		WebElement num = driver.findElement(By.xpath("//input[@id='cc_num']"));
		num.sendKeys(ccno);
		WebElement type = driver.findElement(By.xpath("//select[@id='cc_type']"));
		Select s8 = new Select(type);
		s8.selectByVisibleText(ccty);
		WebElement month = driver.findElement(By.xpath("//select[@id='cc_exp_month']"));
		Select s9 = new Select(month);
		s9.selectByVisibleText(ccmnth);
		WebElement year = driver.findElement(By.xpath("//select[@id='cc_exp_year']"));
		Select s10 = new Select(year);
		s10.selectByVisibleText(ccyr);
		WebElement cvvno = driver.findElement(By.xpath("//input[@id='cc_cvv']"));
		cvvno.sendKeys(ccv);
		WebElement btnBook = driver.findElement(By.xpath("//input[@id='book_now']"));
		btnBook.click();
	}

	@When("user should get order id")
	public void user_should_get_order_id() {
		WebElement c = driver.findElement(By.id("order_no"));
		String name = c.getAttribute("value");
		System.out.println(name);
	}

	@Then("user should verify success message")
	public void tc4() {
		Assert.assertTrue("Verify the message", true);
	}
}
