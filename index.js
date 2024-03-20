function receivesAFunction(fn) {
  return fn();
}

function returnsANamedFunction() {
  return addNum;
}

function returnsAnAnonymousFunction() {
  return () => console.log("Anonymous");
}

//named function to be returned
function addNum(x) {
  return Math.abs(x);
}
