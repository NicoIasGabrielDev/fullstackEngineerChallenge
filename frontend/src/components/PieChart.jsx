import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer,} from "recharts";

const COLORS = ["#0088FE","#00C49F","#FFBB28","#FF8042","#a36aff","#ff6384"];

export default function SectorPieChart({ data }) {
  return (
    <div>
      <h3>{"Total CO₂ (tons) Emissions per Year"}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="emission"
            nameKey="year" 
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
