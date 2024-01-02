export function convertDateFormat(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate().toString().padStart(2, "0");
  const monthName = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${day}/${monthName}/${year}`;

  return formattedDate;
}
