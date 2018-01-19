
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine > 0) {
  return katzDeliLine[0]
  katzDeliLine.shift
}
else {
return "There is nobody waiting to be served!";
}
}
