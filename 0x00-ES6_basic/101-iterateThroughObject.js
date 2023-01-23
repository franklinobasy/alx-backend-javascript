export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const item of reportWithIterator) {
    employees.push(item);
  }
  return employees.join(' | ');
}
