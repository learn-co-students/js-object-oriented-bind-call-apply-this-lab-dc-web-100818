//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  const arguments = Array.prototype.slice.call(args)
  return fn.apply(thisValue, arguments);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunction = functionToBeCopied.bind(thisValue);
  return newFunction;
}
