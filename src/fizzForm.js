angular.module("fizzBuzz").component("fizzForm", {
  templateUrl: "src/fizzForm.html",
  bindings: {
    num1: "=",
    num2: "=",
    max: "=",
    fnc: "="
  }
});