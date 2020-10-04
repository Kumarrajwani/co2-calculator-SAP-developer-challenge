const yargs = require("yargs"); //handles parsing command line arguments
let params = yargs.argv; //get the argument

/* Dataset for calculation*/
const avgValuesDataSet = []; //store dataset as array of objects
avgValuesDataSet.push(
  {
    "small-diesel-car": 142,
    "small-petrol-car": 154,
    "small-plugin-hybrid-car": 73,
    "small-electric-car": 50,
  },
  {
    "medium-diesel-car": 171,
    "medium-petrol-car": 192,
    "medium-plugin-hybrid-car": 110,
    "medium-electric-car": 58,
  },
  {
    "large-diesel-car": 209,
    "large-petrol-car": 282,
    "large-plugin-hybrid-car": 126,
    "large-electric-car": 73,
  },
  {
    bus: 27,
  },
  {
    train: 6,
  }
);

/* Business Logic for computing CO2 emission*/
function co2EmissionCalculator() {
  let co2, co2E;
  const startString = "You trip caused ",
    endString = " of CO2-equivalent.";
  //check if mandatory arguments not passed
  if ((params["transportation-method"] && params.distance != null) || "") {
    for (let i = 0; i < avgValuesDataSet.length; i++) {
      for (let j = 0; j < Object.keys(avgValuesDataSet[i]).length; j++) {
        if (
          params["transportation-method"] ===
          Object.keys(avgValuesDataSet[i])[j] //search object key from the dataset, if key exists then return its value
        ) {
          co2 = Object.values(avgValuesDataSet[i])[j] * params.distance;
          if (params["unit-of-distance"] === "m" && params.output === "kg") {
            co2E =
              `${startString}` +
              Math.round((co2 / Math.pow(10, 6)) * 10) / 10 +
              "kg" +
              `${endString}`;
          } else if (params["unit-of-distance"] === "m") {
            co2E =
              `${startString}` +
              Math.round((co2 / Math.pow(10, 3)) * 10) / 10 +
              "g" +
              `${endString}`;
          } else {
            co2E =
              `${startString}` +
              Math.round((co2 / Math.pow(10, 3)) * 10) / 10 +
              "kg" +
              `${endString}`;
          }
        }
      }
    }
    console.log("\x1b[33m%s\x1b[0m", co2E); //print the output and change text color
  } else {
    console.log(
      "Missing Mandatory Argument:" + "\x1b[31m%s\x1b[0m", //print this message if mandatory arguments missing
      "transportation-method or distance or both"
    );
  }
}
co2EmissionCalculator();
