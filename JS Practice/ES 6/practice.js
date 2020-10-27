//www.w3resource.com/javascript-exercises/fundamental/index.php#EDITOR

https: const matches = (obj, src) =>
  Object.keys(src).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === src[key]
  );

const obj1 = { beard: true, age: 25 };
const src = { beard: true };

console.log(matches(obj1, src));

const csvToArray = (data, delimeter, omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((row) => row.split(delimeter));

console.log(csvToArray("a,b\nc,d"));

const csvToObjArray = (data, delimter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((row) => {
      const values = row.split(delimter);
      return titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
    });
};

console.log(csvToObjArray("col1,col2\na,b\nc,d"));

const objToCSV = (objectArray) => {
  const header = Object.keys(objectArray[0]).join();
  let csvString = header + "\n";

  for (const object of objectArray) {
    const row = Object.values(object).join();
    csvString += row + "\n";
  }

  return csvString;
};

console.log(
  objToCSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);

const JSON_to_CSV = (array, columns, delimeter = ",") => {
  return [
    columns.join(delimeter),
    ...array.map((element) => {
      return columns.reduce((acc, column) => {
        return `${acc}${acc.length === 0 ? "" : delimeter}"${
          element[column] ? element[column] : ""
        }"`;
      }, "");
    }),
  ].join("\n");
};

console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
