export const metadata = { title: "Schedule - Solon Investment Society" };

const events = [
  { date: "September 10", activity: "Kick-off Meeting" },
  { date: "September 17", activity: "Intro to Investing" },
  { date: "September 24", activity: "Guest Speaker: Alumni Investor" },
];

export default function Schedule() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-700">Meeting Schedule</h1>
      <table className="min-w-full border border-blue-200 bg-white">
        <tbody>
          {events.map((event, idx) => (
            <tr key={idx} className={idx % 2 ? "bg-blue-50" : undefined}>
              <td className="px-4 py-2 font-medium text-blue-700">{event.date}</td>
              <td className="px-4 py-2">{event.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
