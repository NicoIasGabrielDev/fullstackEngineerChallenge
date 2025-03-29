import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function EmissionBarChart({ data }) {
  return (
    <div style={{ width: "1750px"}}>
      <h3>Average Energy Consumption per Company </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="company" tick={{ fontSize: 10 }} tickFormatter={(value) => value.replace("Empresa", "Company")} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="consume" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
