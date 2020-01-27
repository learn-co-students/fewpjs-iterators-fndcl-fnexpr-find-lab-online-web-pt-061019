const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let winResult = record.find(year => year.result === "W")
  return !!winResult ? winResult.year : undefined;
}