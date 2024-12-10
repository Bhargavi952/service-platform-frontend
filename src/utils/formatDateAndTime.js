export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    weekday: "long", // "Monday"
    year: "numeric", // "2024"
    month: "long", // "December"
    day: "numeric", // "11"
    hour: "2-digit", // "02"
    minute: "2-digit", // "28"
    hour12: true, // Use 12-hour format (AM/PM)
  });
}
