// Note
// PM is midday to midnight
// AM is midnight to midday

// Value
const input = "07:05:45PM";

const timeConversion = (s) => {
  // Config data
  const isPM = s.includes("PM");
  const isAM = s.includes("AM");
  const hour = parseInt(s)?.valueOf(1);
  const splitHour = s.split(":");
  let tempHour = [];

  //   Make a condition for change value 12 to 0 if on AM and keep it still 12 if PM
  isPM && tempHour.push(hour == 12 ? 12 : hour + 12);
  isAM && tempHour.push(hour == 12 ? 0 : hour);

  //   Make hour format to add 0 in first char if the value not 2 digit
  const hourFormat = tempHour.at(0).toString().padStart(2, "0");

  // return the value
  return (
    hourFormat + ":" + splitHour[1] + ":" + splitHour[2].replace(/[AP]M/, "")
  );
};

timeConversion(input);
