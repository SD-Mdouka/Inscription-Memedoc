/** @format */
import axios from "axios";
import $ from "jquery";

export function JQuerycode() {
  $(".inputNum").keyup(function () {
    var code = $(".inputNum").val();
    var cfVM = $("#btnConfirmCode");
    function IsLengthValidConfirm(code) {
      if (code.length >= 6) {
        return true;
      } else return false;
    }
    //btn confirme d'etate
    if (!IsLengthValidConfirm(code)) {
      cfVM.removeClass("btn-success").addClass("validBtn");
      cfVM.removeClass("confirme");
    } else {
      cfVM.removeClass("validBtn").addClass("btn-success");
    }
  });
  $(".inputText").keyup(function () {
    var password = $(".inputText").val();

    var pattern = /^[a-zA-Z0-9- ]*$/;
    /*Start Message List*/
    var lengthValidationMessage = $("#length");
    var ucVM = $("#upperCase");
    var nbVM = $("#number");
    var scVM = $("#specialCharacter");
    /*end Message List */
    /*Start Span Error */
    var lengthValidationMessageSpan = $("#lengthSpan");
    var ucVMSpan = $("#upperCaseSpan");
    var nbVMSpan = $("#numberSpan");
    var scVMSpan = $("#specialCharacterSpan");
    /*End Span Error */
    var cfVM = $("#btnConfirm");
    function IsLengthValidConfirm(password) {
      var upperCase = new RegExp("[A-Z]");
      var numbers = new RegExp("[0-9]");
      var specialChars = new RegExp(
        /[~`!#$% \^ &@*+=\- \[ \]\\';,/{}|\\":<> \?]/
      );

      if (password.length >= 9) {
        return true;
      } else return false;
    }

    function IsLengthValid(password) {
      if (password.length >= 9) {
        return true;
      } else return false;
    }

    function IsUpperCaseValid(password) {
      var upperCase = new RegExp("[A-Z]");

      if (!password.match(upperCase)) return false;
      else return true;
    }

    function IsNumberValid(password) {
      var numbers = new RegExp("[0-9]");

      if (!password.match(numbers)) return false;
      else return true;
    }
    function IsSpecialCharacterValid(password) {
      var specialChars = new RegExp(
        /[~`!#$% \^ &@*+=\- \[ \]\\';,/{}|\\":<> \?]/
      );

      if (!specialChars.test(password)) return false;
      else return true;
    }

    if (password === "") {
      /*List */
      ucVM.removeClass("invalid").removeClass("valid");
      lengthValidationMessage.removeClass("invalid").removeClass("valid");
      nbVM.removeClass("invalid").removeClass("valid");
      scVM.removeClass("invalid").removeClass("valid");
      /*Span */
      ucVMSpan.removeClass("invalid").removeClass("validSpan");
      lengthValidationMessageSpan
        .removeClass("invalid")
        .removeClass("validSpan");
      nbVMSpan.removeClass("invalid").removeClass("validSpan");
      scVMSpan.removeClass("invalid").removeClass("validSpan");
      cfVM
        .removeClass("validBtn")
        .removeClass("btn-success")
        .addClass("confirme");
      return false;
    }

    //length Validation
    if (!IsLengthValid(password)) {
      lengthValidationMessage.removeClass("valid").addClass("invalid");
      lengthValidationMessageSpan.removeClass("validSpan").addClass("invalid");
    } else {
      lengthValidationMessage.removeClass("invalid").addClass("valid");
      lengthValidationMessageSpan.removeClass("invalid").addClass("validSpan");
    }

    //upperCase Validation
    if (!IsUpperCaseValid(password)) {
      ucVM.removeClass("valid").addClass("invalid");
      ucVMSpan.removeClass("validSpan").addClass("invalid");
    } else {
      ucVM.removeClass("invalid").addClass("valid");
      ucVMSpan.removeClass("invalid").addClass("validSpan");
    }

    //numbers Validation
    if (!IsNumberValid(password)) {
      nbVM.removeClass("valid").addClass("invalid");
      nbVMSpan.removeClass("validSpan").addClass("invalid");
    } else {
      nbVM.removeClass("invalid").addClass("valid");
      nbVMSpan.removeClass("invalid").addClass("validSpan");
    }

    //specialCharcter Validation
    if (!IsSpecialCharacterValid(password)) {
      scVM.removeClass("valid").addClass("invalid");
      scVMSpan.removeClass("validSpan").addClass("invalid");
    } else {
      scVM.removeClass("invalid").addClass("valid");
      scVMSpan.removeClass("invalid").addClass("validSpan");
    }
    //btn confirme d'etate
    if (!IsLengthValidConfirm(password)) {
      cfVM.removeClass("btn-success").addClass("validBtn");
      cfVM.removeClass("confirme");
    } else {
      cfVM.removeClass("validBtn").addClass("btn-success");
    }
  });
}
