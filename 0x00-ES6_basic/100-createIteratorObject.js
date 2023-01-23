// The Breakdown 😏😉😉
// I know it's long, I was just trying to understand how things work
//
// Here's the shorter code using generator function
//
export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}

//
// Now, the longer code
// export default function createIteratorObject(report) {
//   const listObject = Object.keys(report.allEmployees);
//   let currentKey = 0;
//   let currentIndex = 0;
//   let result = {};
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           if (currentKey === listObject.length) {
//             return {
//               value: undefined,
//               done: true,
//             };
//           }

//           const array = report[listObject[currentKey]];
//           if (currentIndex < array.length) {
//             result = {
//               value: array[currentIndex],
//               done: false,
//             };
//             currentIndex += 1;
//             if (currentIndex === array.length) {
//               currentKey += 1;
//               currentIndex = 0;
//             }
//           }
//           return result;
//         },
//       };
//     },
//   };
// }
