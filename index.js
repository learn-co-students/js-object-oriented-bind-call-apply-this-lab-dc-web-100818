//Your code here
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn,setThis,arg) {
  return fn.call(setThis, arg);
}

function setThisWithApply(fn, setThis, arr) {
  return fn.apply(setThis, arr);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
let newFunction = functionToBeCopied.bind(thisValue)
return newFunction;
}
