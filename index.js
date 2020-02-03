const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winningSeason = record.find(superbowl => superbowl.result === 'W')
  return winningSeason ? winningSeason.year : undefined;
}