angular.module("fizzBuzz").component("list", {
  templateUrl: "src/list.html",
  bindings: {
    num1: "=",
    num2: "=",
    max: "="
  }
});