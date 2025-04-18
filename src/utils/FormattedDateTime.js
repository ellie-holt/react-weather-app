import React from "react";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const shortWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Helper function to format the day (of the month) with the correct suffix
const formatDay = day => {
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
  const fullDate = new Date(timestamp);

  const formattedValues = {
    minutes: String(fullDate.getMinutes()).padStart(2, "0"),
    hours: String(fullDate.getHours()).padStart(2, "0"),
    weekday: weekdays[fullDate.getDay()],
    shortWeekday: shortWeekdays[fullDate.getDay()],
    day: formatDay(fullDate.getDate()),
    month: months[fullDate.getMonth()],
    shortMonth: shortMonths[fullDate.getMonth()],
    year: fullDate.getFullYear().toString(),
  };

  // Split the inputted format string by the underscore character
  // This will create an array of strings that can be iterated over over to format the date and time
  const formatArray = format.split("_");

  // Create a new string to store the formatted values
  let formattedString = "";

  // Iterate over formatArray and check if the current string is a key in the formattedValues object
  // If it is, add the newly formatted value to the formattedString, otherwise add the string as is
  formatArray.forEach(string => {
    if (formattedValues[string]) {
      formattedString += formattedValues[string];
    } else {
      formattedString += string;
    }
  });

  return <span>{formattedString}</span>;
}
