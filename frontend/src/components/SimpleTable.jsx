export default function AverageTable({ data }) {
  return (
    <div>
    <h3>Energy Consumption by Sector</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Sector</th>
            <th>Consume (MWh)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{formatSector(row.sector)}</td>
              <td>{row["consume"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatSector(sector) {
  const sectors = {
    "Transporte": "Transportation",
    "Construção": "Construction",
    "Indústria": "Industry",
    "Energia": "Energy"
  };

  return sectors[sector] || sector;
}
