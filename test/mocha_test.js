const {Builder , By , Key , until} = require('selenium-webdriver');
const assert = require('chai').assert;
var webdriver = require('selenium-webdriver');


/***************ELEMENTS**************/
var ELEMENT = {
    girisYapBtn:"//a[contains(text(),'Giriş Yap')]",
    usernameTxt: "//input[@id='username']",
    passwordTxt: "//input[@id='password']",
    loginBtn:"userLoginSubmitButton",
    TITLE: "Sahibinden Satılık, Kiralık, Emlak, Oto, Alışveriş Ürünleri"
    
    }
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Basic Mocha -JS Exampla',function(){
    this.timeout(5000);
    beforeEach(function(){
        
        var baseurl='https://www.sahibinden.com/';
        driver.get(baseurl);
    });
    afterEach(function(){
        //driver.quit();
    });


        it('Check Title',function(){
                //Enter test steps
                driver.getTitle().then(function(title){
                    assert.equal(title,ELEMENT.TITLE)
                });
                driver.sleep('1000');
        })

        it('Login Success',function(){
                //Enter test steps
                //driver.wait(until.elementLocated(By.xpath(ELEMENT.SEARCH_TXT)),1000).then(function(){
                driver.findElement(By.xpath(ELEMENT.girisYapBtn)).click();
                driver.sleep('3000');
                driver.findElement(By.xpath(ELEMENT.usernameTxt)).sendKeys('xluck@onlinecmail.com');
                driver.findElement(By.xpath(ELEMENT.passwordTxt)).sendKeys('123456Aa.');
                driver.findElement(By.id(ELEMENT.loginBtn)).click();
                driver.sleep('1000');
               // }); 
        })
        
})

