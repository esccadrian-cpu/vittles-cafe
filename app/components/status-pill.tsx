"use client";

import { useEffect, useState } from "react";

const hours: Record<number, [number, number] | null> = {
  0: [7, 14],
  1: null,
  2: [7, 20],
  3: [7, 20],
  4: [7, 20],
  5: [7, 20],
  6: [7, 16],
};
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatHour(hour: number) {
  const display = hour % 12 || 12;
  return `${display}:00 ${hour < 12 ? "AM" : "PM"}`;
}

function getCentralTime() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const weekdays: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Sun";
  const hour =
    Number(parts.find((part) => part.type === "hour")?.value ?? 0) % 24;
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? 0,
  );
  return { day: weekdays[weekday], time: hour + minute / 60 };
}

export function StatusPill() {
  const [status, setStatus] = useState({
    open: false,
    text: "Open Tue–Sun · Closed Mondays",
  });

  useEffect(() => {
    const update = () => {
      const now = getCentralTime();
      const today = hours[now.day];
      if (today && now.time >= today[0] && now.time < today[1]) {
        setStatus({
          open: true,
          text: `Open now · Today ${formatHour(today[0])} – ${formatHour(today[1])}`,
        });
        return;
      }
      if (today && now.time < today[0]) {
        setStatus({
          open: false,
          text: `Closed · Opens today at ${formatHour(today[0])}`,
        });
        return;
      }
      for (let offset = 1; offset <= 7; offset += 1) {
        const day = (now.day + offset) % 7;
        const next = hours[day];
        if (next) {
          setStatus({
            open: false,
            text: `Closed · Opens ${offset === 1 ? "tomorrow" : days[day]} at ${formatHour(next[0])}`,
          });
          return;
        }
      }
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#ddc29b] bg-[#fffaf0] px-4 py-2 text-sm font-bold text-[#302216]">
      <span
        className={`h-2.5 w-2.5 rounded-full ${status.open ? "bg-[#617337] shadow-[0_0_0_4px_rgba(97,115,55,.13)]" : "bg-[#a04430]"}`}
        aria-hidden="true"
      />
      {status.text}
    </span>
  );
}
