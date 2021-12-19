var passwordInput = document.getElementById("psw");
var confirmPasswordInput = document.getElementById("psw2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
let special = document.getElementById("special");
let match = document.getElementById("match");

passwordInput.onkeyup = function() {
  displayRules();
  let lowerCaseLetters = /[a-z]/g;
  let check = verifyMatch(lowerCaseLetters);
  showHideRule(check, letter);

  let upperCaseLetters = /[A-Z]/g;
  check = verifyMatch(upperCaseLetters);
  showHideRule(check, capital);

  let numbers = /[0-9]/g;
  check = verifyMatch(numbers);
  showHideRule(check, number);

  let specials = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;
  check = verifyMatch(specials);
  showHideRule(check, special);

  check = passwordInput.value.length >= 8;
  showHideRule(check, length);

  check = (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value != "");
  showHideRule(check, match);
}

confirmPasswordInput.onkeyup = function() {
  displayRules();
  check = (passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value != "");
  showHideRule(check, match);
}

function showHideRule (check, rule) {
  if (check) {
    rule.classList.remove("invalid");
    rule.classList.add("valid");
  } else {
    rule.classList.remove("valid");
    rule.classList.add("invalid");
  }
}

function verifyMatch(value) {
  return passwordInput.value.match(value);
}

function displayRules() {
  document.getElementById("passwordMessage").style.display = "block";
  document.getElementById("confirmPasswordMessage").style.display = "block";
}
