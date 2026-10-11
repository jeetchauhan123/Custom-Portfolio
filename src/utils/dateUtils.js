const MONTHS = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

function toMonthIndex(value, isEndDate = false) {
  if (!value) return null;

  const text = String(value).trim().toLowerCase();
  const now = new Date();

  if (["present", "current", "now"].includes(text)) {
    return now.getFullYear() * 12 + now.getMonth();
  }

  // A year-only start means January; a year-only end means December.
  if (/^\d{4}$/.test(text)) {
    const year = Number(text);
    return year * 12 + (isEndDate ? 11 : 0);
  }

  const parts = text.replace(",", "").split(/\s+/);

  if (parts.length < 2) return null;

  const month = MONTHS[parts[0]];
  const year = Number(parts[1]);

  if (month === undefined || !Number.isInteger(year)) {
    return null;
  }

  return year * 12 + month;
}

export function getDurationMonths(startDate, endDate) {
  const start = toMonthIndex(startDate);
  const end = toMonthIndex(endDate, true);

  if (start === null || end === null || end < start) {
    return 0;
  }

  // Calendar-month estimate, inclusive of both endpoint months.
  return end - start + 1;
}

export function formatDuration(totalMonths) {
  if (totalMonths <= 0) return "0 months";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  }

  return `${years} yr${years === 1 ? "" : "s"} ${months} mo${months === 1 ? "" : "s"}`;
}

export function getTotalDurationMonths(entries) {
  const ranges = entries
    .map((entry) => ({
      start: toMonthIndex(entry.startDate),
      end: toMonthIndex(entry.endDate, true),
    }))
    .filter(({ start, end }) => start !== null && end !== null && end >= start)
    .sort((a, b) => a.start - b.start);

  if (ranges.length === 0) return 0;

  // Merge overlapping periods so the same calendar month isn't counted twice.
  let totalMonths = 0;
  let currentStart = ranges[0].start;
  let currentEnd = ranges[0].end;

  for (const range of ranges.slice(1)) {
    if (range.start <= currentEnd + 1) {
      currentEnd = Math.max(currentEnd, range.end);
    } else {
      totalMonths += currentEnd - currentStart + 1;
      currentStart = range.start;
      currentEnd = range.end;
    }
  }

  totalMonths += currentEnd - currentStart + 1;

  return totalMonths;
}
