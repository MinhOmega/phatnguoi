import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string) {
  try {
    // Input format: "HH:mm, DD/MM/YYYY"
    const [time, date] = dateStr.split(", ");
    const [hours, minutes] = time.split(":");
    const [day, month, year] = date.split("/");

    // Create date object (month is 0-based in JavaScript)
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));

    return new Intl.DateTimeFormat("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(dateObj);
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateStr; // Return original string if parsing fails
  }
}
