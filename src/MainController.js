angular.module("fizzBuzz").controller("MainController", function() {
  const vm = this;
  vm.max = 100;
  vm.num1 = 3;
  vm.num2 = 5;
  vm.vList = [1,2,3,4];

  vm.fizzBuzzCalc = function() {
    vm.vList = [];
    for(let i = 1; i <= vm.max; i++){
      let str = "";
      if(i%vm.num1 === 0){
        str = "Fizz";
      }
      if(i%vm.num2 === 0){
        str += "Buzz";
      }
      if(!str){
        str = i;
      }
      vm.vList.push(str);
    }
  };
});