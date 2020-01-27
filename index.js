const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let obj = record.find(o => o.result === "W" )
  return obj ?  (obj.year) : undefined
}