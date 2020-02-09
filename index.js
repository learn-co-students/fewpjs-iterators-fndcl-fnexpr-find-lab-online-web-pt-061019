const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  const win = records.find( function(record) { 
    return record.result === "W"
  })
  // if (win !== undefined)
  //   return win.year
  // else
  //   return undefined
  return win ? win.year : undefined 
};