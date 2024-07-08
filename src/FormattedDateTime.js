import React from "react";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Helper function to format the day with the correct suffix
const formatDay = (day) => {
  if (day >= 4 && day <= 20) {
    return `${day}th`;
  } else if (day === 1 || day === 21 || day === 31) {
    return `${day}st`;
  } else if (day === 2 || day === 22) {
    return `${day}nd`;
  } else if (day === 3 || day === 23) {
    return `${day}rd`;
  } else {
    return `${day}th`;
  }
};

export default function FormattedDateTime({ timestamp, format }) {
  console.log(timestamp);
  console.log(format);
  const fullDate = new Date(timestamp);

  const formattedValues = {
    minutes: String(fullDate.getMinutes()).padStart(2, "0"),
    hours: String(fullDate.getHours()).padStart(2, "0"),
    weekday: weekdays[fullDate.getDay()],
    day: formatDay(fullDate.getDate()),
    month: months[fullDate.getMonth()],
    year: fullDate.getFullYear().toString(),
  };
  // Split the formats string into an array of individual format strings
  const splitFormats = format.split("_");
  console.log(splitFormats);
  // Create a new string to store the formatted values
  let formattedString = "";
  // Iterate over the split format strings and append the formatted values to the string
  splitFormats.forEach((string) => {
    if (formattedValues[string]) {
      formattedString += formattedValues[string];
    } else {
      formattedString += string;
    }
  });
  console.log(formattedString);

  return <span>{formattedString}</span>;
}
