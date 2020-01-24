const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find(superbowl => superbowl.result === 'W')
  return win ? win.year : undefined;
} 
