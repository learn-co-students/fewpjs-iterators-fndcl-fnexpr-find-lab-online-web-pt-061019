const testVar = {}

function superbowlWin(teamRecord) {
  let win = teamRecord.find(year => year.result === "W")
    // if(win){
    //   return win.year
    // } else {
    //   return undefined
    // }
  return !!win ? win.year :undefined
}

// superbowlWin('KC Chiefs');

// condition ? exprIfTrue : exprIfFalse
//  conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.