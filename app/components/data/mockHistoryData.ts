export const mockHistoryData: Record<
  string,
  { time: string; latency: number }[]
> = {
  Hungary: [
    { time: "09:00", latency: 31 },
    { time: "10:00", latency: 27 },
    { time: "11:00", latency: 24 },
    { time: "12:00", latency: 22 },
    { time: "13:00", latency: 28 },
  ],

  Portugal: [
    { time: "09:00", latency: 44 },
    { time: "10:00", latency: 46 },
    { time: "11:00", latency: 42 },
    { time: "12:00", latency: 39 },
    { time: "13:00", latency: 41 },
  ],

  Norway: [
    { time: "09:00", latency: 18 },
    { time: "10:00", latency: 17 },
    { time: "11:00", latency: 16 },
    { time: "12:00", latency: 15 },
    { time: "13:00", latency: 18 },
  ],

  Spain: [
  {
    time: "Yesterday",
    activity: "📥 Dataset submitted",
  },
  {
    time: "",
    activity: "⚠️ Validation warning detected",
  },
  {
    time: "",
    activity: "✅ Submission corrected",
  },
  {
    time: "",
    activity: "📊 Indicators recalculated",
  },
  {
    time: "",
    activity: "🦅 Dashboard published",
  },
],

  Azerbaijan: [
    { time: "09:00", latency: 57 },
    { time: "10:00", latency: 54 },
    { time: "11:00", latency: 56 },
    { time: "12:00", latency: 59 },
    { time: "13:00", latency: 52 },
  ],
};