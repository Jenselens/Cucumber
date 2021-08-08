$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cucum.feature");
formatter.feature({
  "name": "verifying facebbok details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying facebook login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter \"\u003clocation\u003e\",\"\u003chotel\u003e\",\"\u003croomtype\u003e\"and\"\u003cNoofRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select the hotel by click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter \"\u003cfirst_name\u003e\",\"\u003clast_name\u003e\",\"\u003caddress\u003e\",\"\u003ccc_num\u003e\",\"\u003ccc_type\u003e\",\"\u003ccc_expmonth\u003e\",\"\u003ccc_expyr\u003e\"and\"\u003ccc_ccv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should get order id",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotel",
        "roomtype",
        "NoofRooms",
        "first_name",
        "last_name",
        "address",
        "cc_num",
        "cc_type",
        "cc_expmonth",
        "cc_expyr",
        "cc_ccv"
      ]
    },
    {
      "cells": [
        "JeniferJoseph",
        "WA4P6I",
        "Sydney",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "Jenifer",
        "Joseph",
        "Chennai\u003d600013",
        "7299012723654320",
        "VISA",
        "March",
        "2022",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying facebook login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginsetup.tc1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"JeniferJoseph\" and \"WA4P6I\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginsetup.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsetup.tc3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter \"Sydney\",\"Hotel Creek\",\"Double\"and\"2 - Two\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsetup.user_should_enter_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select the hotel by click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsetup.user_should_select_the_hotel_by_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Jenifer\",\"Joseph\",\"Chennai\u003d600013\",\"7299012723654320\",\"VISA\",\"March\",\"2022\"and\"234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsetup.user_should_enter_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get order id",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsetup.user_should_get_order_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsetup.tc4()"
});
formatter.result({
  "status": "passed"
});
});