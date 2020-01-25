// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  let winning = record.find(r => r.result === "W")
  return winning ? winning.year : undefined
}