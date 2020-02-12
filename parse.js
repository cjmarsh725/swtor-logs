const nReadLines = require('n-readlines');
const reader = new nReadLines("C:/Users/cjmar/Documents/Star Wars - The Old Republic/CombatLogs/combat_2020-02-11_13_08_55_617665.txt");

console.log("PARSING LOGS...");

let line, lineNum = 0;
while (line = reader.next()) {
  lineNum++;
  if (lineNum === 25537) {
    console.log(line.toString());
  }
}
console.log(lineNum);