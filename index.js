//Your code here
function justInvoke(fn) {
      return fn();
}

function setThisWithCall(fn, thisValue, argument) {
return fn.call(thisValue, argument);
}

function setThisWithApply(fn, thisValue, args) {
	return fn.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
      const copy = functionToBeCopied.bind(thisValue);
        return copy;
}