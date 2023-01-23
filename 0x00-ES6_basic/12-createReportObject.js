export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
