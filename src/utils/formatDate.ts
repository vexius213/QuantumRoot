export function formatDate(
  date: Date | string | number,
  locale: string = "en-US"
): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return "Invalid date";
  }

  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
