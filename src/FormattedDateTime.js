import React from "react";

export default function FormattedDateTime({ timestamp, format }) {
  console.log(timestamp);
  const fullDate = new Date(timestamp);

  switch (format) {
    case "hour":
      return <div>{fullDate.getHours()}</div>;
    default:
      return null;
  }
}
