export const metadata = { title: "Officers - Solon Investment Society" };

const officers = [
  { role: "President", name: "Jane Doe" },
  { role: "Vice President", name: "John Smith" },
  { role: "Treasurer", name: "Alice Johnson" },
  { role: "Secretary", name: "Bob Lee" },
];

export default function Officers() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-700">Our Officers</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {officers.map((officer) => (
          <li key={officer.role} className="p-4 border border-blue-200 rounded shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-blue-700">{officer.name}</h2>
            <p className="text-sm text-blue-900">{officer.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
