export default function iterateThroughObject(reportWithIterator) {
    let output = "";
    for (const name of reportWithIterator) {
      output += name + " | ";
    }
    return output;
  }
  